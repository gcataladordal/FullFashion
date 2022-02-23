const express = require("express");
const app = express();
const path = require("path")
const router = require("./routes/routes")
const connect = require("./database/mongo")



app.use(express.json())

// app.use(express.static(path.join(__dirname, 'fullfashion/build')));

app.use("/", router)

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/fullfashion/build/index.html'));
// });

const port = 5500;

app.listen(port, () => console.log(`La aplicación funciona por el puerto ${port}`));