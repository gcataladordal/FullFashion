const mongoose = require("mongoose")
const Usuario = require("../models/userModel");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const actionUsers = {

    registro: (req, res) => {
        register(req, res)

    },
    loguear: (req, res) => {
        login(req, res)
    },
    addEstilosFav: async (req, res) => {
        let filter = {id_usuario: req.body.id_usuario};
        let update = {color: req.body.color, estilo: req.body.estilo}
        let actualizacion = await Usuario.findOneAndUpdate(filter, update)
        res.send({ message: "Compra realizada correctamente" })
    },
    addSegundaDireccion: async (req, res) => {
        let filtro = {id_usuario: req.body.id_usuario};
        let cambio = { direccion2: req.body.direccion2, poblacion2: req.body.poblacion2, cp2: req.body.cp2 }
        let actu = await Usuario.findOneAndUpdate(filtro, cambio);
        res.send({ message: "Compra realizada correctamente" })
    },
    updateUser: (req, res) => {
        updateUser(req, res)}
}

async function register(req, res) {

    //! ---- Variables de la información del registro -----
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const email = req.body.email;
    const dni = req.body.dni
    const direccion = req.body.direccion;
    const cp = req.body.cp;
    const poblacion = req.body.poblacion;
    const password = req.body.password;
    const password2 = req.body.password2;
    const talla = req.body.talla;
    const target = req.body.target;

    //! Expresiones Regulares validaciones:
    var regExpDni = new RegExp(/^[0-9]{8}\-?[a-zA-Z]{1}/);
    var regExpName = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/u); //agregado espacio para poner dos apellidos
    var regExpEmail = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
    var regExpPass = new RegExp(/^(?=\w*\d)(?=\w*[a-zA-Z])\S{6,10}$/);
    var regExpCp = new RegExp(/^\d{5}$/);
    var regExpDir = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\d ]+$/u) //agregado números y el espacio para poner en la dirección

    //! Zona de validaciones

    const nombreOk = regExpName.test(nombre);
    const apellidosOk = regExpName.test(apellidos);
    const emailOk = regExpEmail.test(email);
    const poblacionOk = regExpDir.test(poblacion);
    const passOk = regExpPass.test(password);
    const pass2Ok = regExpPass.test(password2);
    const mismoPassOk = password == password2;
    const dniOk = regExpDni.test(dni) && validation_dni(dni);
    const cpOk = regExpCp.test(cp);
    const dirOk = regExpDir.test(direccion)

    var ok = nombreOk && apellidosOk && emailOk && passOk && dniOk && pass2Ok && mismoPassOk && cpOk && poblacionOk && dirOk;


    // //! ---- SI TODAS VALIDACIONES TRUE --------
    if (ok) {
        const existeDni = await busquedaUsuarioDni(dni);

        if ((existeDni) == null) {
            var passEnc = "";
            passEnc = await bcrypt.hash(password, saltRounds);
            let inserta = await insertarUsuario(nombre, apellidos, email, dni, passEnc, direccion, cp, poblacion, talla, target, res);
            console.log("registrado correctamente")
            res.json("insertado correctamente")
        } else {
            console.log("el usuario ya existe");
        }
    } else {;
        console.log("algun campo no es correcto")
    }
}

async function insertarUsuario(nombre, apellidos, email, dni, password, direccion, cp, poblacion, talla, target) {
    dni = dni.replace("-", "");
    dni = dni.toUpperCase();
    let usuario = {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        dni: dni,
        password: password,
        direccion: direccion,
        cp: cp,
        poblacion: poblacion,
        direccion2: "",
        poblacion2: "",
        cp2: "",
        talla: talla,
        target: target,
        color: "",
        estilo: "",
        compras: [],
        baneado: false,
        admin: false
    };

    let nuevoUsuario = new Usuario(usuario);

    nuevoUsuario.save(function (err) {
        if (err) throw err;
        console.log(`Inserción correcta del Usuario ${nombre}`);

    });
}

async function busquedaUsuarioDni(dni) {
    dni = dni.replace("-", "");
    dni = dni.toUpperCase();
    let datos = await Usuario.findOne({ dni: dni });
    return datos;
}

function validationFormat(dni) {
    dni = dni.toUpperCase();
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var nums = parseInt(dni.substring(0, dni.length - 1));
    var letra = letras[nums % letras.length]; // [nums % letras.length] = posicion de la letra del array de la policia
    return letra == dni[8];
}

function quitarGuion(dni) {
    var conGuion = dni.split("-");
    if (conGuion.length == 1) {
        return dni;
    } else {
        return conGuion[0] + conGuion[1];
    }
}

function validation_dni(dni) {
    dni = quitarGuion(dni);
    return validationFormat(dni);
}


async function login(req, res) {

    //! ---- Variables de la información del registro -----

    let email = req.body.email;
    let password = req.body.password;
    let existeEmailBD = await busquedaUsuarioEmail(email);
   
    if ((existeEmailBD[0]) == undefined) {
        let registrate = "noExiste";
        console.log("usuario no existe en la BD");
    } else {
        var mismoPass = await bcrypt.compare(password, existeEmailBD[0].password)     // <-- COMPARA LAS 2 PASSWORDS
        if (mismoPass) {
            if (existeEmailBD[0].admin) {
                console.log("es admin")
                let infoUser = saveSesion(existeEmailBD[0]);
                res.json(infoUser)
            } else {
                console.log("no es admin")
                let infoUser = saveSesion(existeEmailBD[0]);
                res.json(infoUser)
            }
        } else {
            console.log("contraseña incorrecta")
            
        }
    }
   
}

async function busquedaUsuarioEmail(email) {
    let datos = await Usuario.find({ email: email });
    return datos;
}

function saveSesion(datosUser) {
    let user = {
        id_usuario: datosUser.id_usuario,
        nombre: datosUser.nombre,
        apellidos: datosUser.apellidos,
        email: datosUser.email,
        dni: datosUser.dni,
        direccion: datosUser.direccion,
        cp: datosUser.cp,
        poblacion: datosUser.poblacion,
        talla: datosUser.talla,
        target: datosUser.target,
        color: datosUser.color,
        estilo: datosUser.estilo,
        admin: datosUser.admin
    }
    return user;
}

    async function updateUser(req, res) {
        let {nombre, apellidos, email, dni, password, direccion, cp, poblacion, talla, target, id} = req.body
        // let logueado = sessionStorage.getItem("infoUser")

        let passEnc = "";
        passEnc = await bcrypt.hash(password, saltRounds);

        Usuario.find({ id_usuario: id }, function (err, user) {
            if (err) throw err;
            if (nombre != "") {user[0].nombre = nombre; }
            if (apellidos != "") { user[0].apellidos = apellidos; }
            if (email != "") { user[0].email = email; }
            if (dni != "") { user[0].dni = dni; }
            if (password != "") { user[0].password = passEnc; }
            if (direccion != "") { user[0].direccion = direccion; }
            if (cp != "") { user[0].cp = cp; }
            if (poblacion != "") { user[0].poblacion = poblacion; }
            if (talla != "") { user[0].talla = talla; }
            if (target != "") { user[0].target = target; }
            user[0].save(function (err) {
                if (err) throw err;
                console.log("Actualización correcta");
            });
            res.send("Usuario actualizado")
        });

    }


module.exports = actionUsers //revisar el nombre para importarlo en las rutas