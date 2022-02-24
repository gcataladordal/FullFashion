const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes/routes");
const connect = require("./database/mongo");

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

// io.on("connect_error", (err) => {
//         console.log(`connect_error due to ${err.message}`);
//       });

// io.on("connection", (socket) => {
//     console.log(`Usuario conectado ${socket.id}`);


//     socket.on("entrarSala", (data) => {
//         socket.join(data)
//         console.log(`El usuario con ID: ${socket.id} se ha unido a la sala`)
//     })

//     socket.on("enviarMensaje", (info) => {
//         socket.to(info.sala).emit("mensajeRecibido", data);
//     })

//     socket.on("disconnected", () => {
//         console.log("User Disconnected", socket.id);
//     })
// })



app.use(express.json())

app.use(express.static(path.join(__dirname, '/client/build')));

app.use("/", router)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + "client", "build","index.html"));
});

const port = 5500;

app.listen(port, () => console.log(`La aplicación funciona por el puerto ${port}`));