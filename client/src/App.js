import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
import io from "socket.io-client";
import { useState } from "react";


const socket = io.connect("http://localhost:5500");

function App() {

    const [userName, setUsername] = useState("")
    const [showChat, setShowChat] = useState(false)
    const [sala] = useState("1");

    const unirseSala = () => {
        if (userName !== "") {
            socket.emit("entrarSala", sala);
            setShowChat(true)
        }
    }

    return (
        <BrowserRouter>
                <NavBar />
                <div className="App">
                    <Main />
                {!showChat ? (
                    <div className="containerUnirseChat">
                        <input type="text" placeholder="Introducir nombre" onChange={(event) => { setUsername(event.target.value) }}></input>
                        <button onClick={unirseSala}>Unirse al Chat</button>
                    </div>)
                    : (<Chat socket={socket} userName={userName} sala={sala} />)}
            </div>
        </BrowserRouter>
    );
}
export default App;
