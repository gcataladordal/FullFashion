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
import MostrarFactura from "../pages/MostrarFactura";
import Payment from "./stripe";
import DatosEnvio from "../pages/DatosEnvio";
import Admin from "./Admin";


class Main extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/recogidalook" element={<RecogidaLook />} />
          <Route path="/resultadolook" element={<ResultadoLook />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/datoscompralogueado" element={<DatosCompraLogueado/>} />
          <Route path="/datoscompramio" element={<DatosCompraMio/>} />
          <Route path="/mostrarfactura" element={<MostrarFactura />} />
          <Route path="/datosenvio" element={<DatosEnvio />} />
          <Route path="/admin" element={<Admin/>} />
            
        </Routes>
      </div>
    );
  }
}
export default Main;
