const express = require("express");
const path = require("path")
const router = require("./routes/routes")
const connect = require("./database/connection")
const app = express();

connect()

app.use(express.json())

app.use(express.static(path.join(__dirname, 'client/build')));

app.use("/", router)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = 5000;

app.listen(port, () => console.log(`La aplicación funciona por el puerto ${port}`));