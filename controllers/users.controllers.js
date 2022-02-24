const mongoose = require("mongoose")
const Usuario = require("../models/userModel");


const actionUsers = {

    addUser: (req, res) => {
        console.log("entra aqui")
        console.log(req.body)
        register(req)

    }
}


function register(req) {

    //! ---- Variables de la información del registro -----
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const email = req.body.email;
    const direccion = req.body.direccion;
    const cp = req.body.cp;
    const poblacion = req.body.poblacion;
    const password = req.body.password;
    const password2 = req.body.password2;

    //! Expresiones Regulares validaciones:
    var regExpName = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/u); //agregado espacio para poner dos apellidos
    var regExpEmail = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
    var regExpPass = new RegExp(/^(?=\w*\d)(?=\w*[a-zA-Z])\S{6,10}$/);
    var regExpCp = new RegExp(/^\d{5}$/);
    var regExpDir = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\d ]+$/u) //agregado números y el espacio para poner en la dirección

    //! Zona de validaciones

    const nombreOk = regExpName.test(nombre);
    const apellidosOk = regExpName.test(apellidos);
    const emailOk = regExpEmail.test(email);
    const poblacionOk = regExpEmail.test(poblacion);
    const passOk = regExpPass.test(password);
    const pass2Ok = regExpPass.test(password2);
    const mismoPassOk = password == password2;
    const cpOk = regExpCp.test(cp);
    const dirOk = regExpDir.test(direccion)


    var ok = nombreOk && apellidosOk && emailOk && passOk && pass2Ok && mismoPassOk && cpOk && poblacionOk && dirOk;
  
    // //! ---- SI TODAS VALIDACIONES TRUE --------

    


    








    const User = new Usuario({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        password: req.body.password,
        direccion: req.body.direccion,
        cp: req.body.cp,
        poblacion: req.body.poblacion,
        talla: req.body.talla,
        target: req.body.target,
        color: "",
        estilo: "",
        compras: [],
        baneado: false,
        admin: false
    });
}
module.exports = actionUsers //revisar el nombre para importarlo en las rutas