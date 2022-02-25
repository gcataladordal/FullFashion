
const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes/routes");
const connect = require("./database/mongo");

// para que funcione bien el body parsed
app.use(express.json())


// para vincular las rutas con server.js, se pone directamenten el archivo donde van a estar esas carpetas
app.use("/", router)


// ESTO ES LO DEL CHAT: 
// const http = require("http");
// const cors = require('cors');
// const { Server } = require("socket.io");
// app.use(cors());
// const server = http.createServer(app)

// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:3000/",
//         methods: ["GET", "POST"]
//     }
// })

// io.on("connection", socket => {
//     console.log(`Usuario conectado ${socket.id}`);

//     socket.on("entrarSala", (data) => {
//         socket.join(data)
//         console.log(`El usuario con ID: ${socket.id} se ha unido a la sala`)
//     })

//     socket.on("enviarMensaje", (info) => {
//         socket.to(info.sala).emit("mensajeRecibido", data);
//     })

//     socket.on("disconnect", () => {
//         console.log("User Disconnected", socket.id);
//     })
// })


//ESTO ES LO DE STATIC
// app.use(express.static(__dirname + './client/public'));
// app.get('*', function(req, res) {
// res.sendFile('index.html', { root: './client/public'});
// })
// app.use(express.static("client/build"));
// app.use(express.static(path.join(__dirname, 'client/build')));


// aquí metemos el puerto en una variable y le decimos que nos escuche
const port = 5500
server.listen(port, () => console.log(`Servidor en puerto: ${port}`))
