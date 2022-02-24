// const express = require("express");
// const app = express();
// const path = require("path")
// const router = require("./routes/routes")
// const connect = require("./database/mongo")

// app.use(express.static(__dirname + './client/public'));

// app.get('*', function(req, res) {
// res.sendFile('index.html', { root: './client/public'});
// })

// app.use(express.static("client/build"));

// app.use(express.json())

// app.use(express.static(path.join(__dirname, 'client/build')));

// app.use("/", router)


// const port = 5500;

// app.listen(port, () => console.log(`La aplicación funciona por el puerto ${port}`));



// para que funcione express
const express = require("express")
const app = express()

// lo hacemos para requerir la carpeta donde van a estar las rutas
const router =  require("./routes/routes")

// para la base de datos
const connect = require("./database/mongo")
// para conectarla
// connect()
// para que funcione bien el body parsed
app.use(express.json())
// para vincular las rutas con server.js, se pone directamenten el archivo donde van a estar esas carpetas
app.use("/", router)


// aquí metemos el puerto en una variable y le decimos que nos escuche
const port = 5500
app.listen(port, () => console.log(`Servidor en puerto: ${port}`))
