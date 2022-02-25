import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Mapa from "./Mapa";
import Home from "../pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {motion} from "framer-motion"
import RecogidaLook from "./RecogidaLook";
import ResultadoLook from "../pages/ResultadoLook";
import DatosCompraLogueado from "../pages/DatosCompraLogueado"; 
import DatosCompraMio from "../pages/DatosCompraMio"; 
import DatosCompraRegalo from "../pages/DatosCompraRegalo"; 

class Main extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Mapa" element={<Mapa />} />
          <Route path="/RecogidaLook" element={<RecogidaLook />} />
          <Route path="/ResultadoLook" element={<ResultadoLook />} />
          <Route path="/DatosCompraLogueado" element={<DatosCompraLogueado/>} />
          <Route path="/DatosCompraRegalo" element={<DatosCompraRegalo/>} />
          <Route path="/DatosCompraMio" element={<DatosCompraMio/>} />
        </Routes>
      </div>
    );
  }
}
export default Main;
