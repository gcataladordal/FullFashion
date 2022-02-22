// Creación del producto
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const objetoUserSchema = {
    nombre: String,
    apellidos: String,
    email: String,
    password: String,
    direccion: String,
    cp: String,
    poblacion: String,
    talla: String,
    target: String,
    color: String,
    estilo: String,
    compras: Array,
    baneado: Boolean,
    admin: Boolean
};

const userSchema = mongoose.Schema(objetoUserSchema, {versionKey: false})

userSchema.plugin(AutoIncrement, {inc_field: 'id_usuario'});

const Usuario = mongoose.model("usuarios", userSchema);


// para exportar
module.exports = Usuario;