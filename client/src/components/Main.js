import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TipoPersona from "./TipoPersona";
import AlturaPeso from "./AlturaPeso";
import Tallas from "./Tallas";
import Color from "./Color";
import Estilo from "./Estilo";
import Mapa from "./Mapa";
import Mainhome from "../pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";

class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
      
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Mapa" element={<Mapa />} />

        </Routes>
        <Mainhome />
        <TipoPersona />
        <AlturaPeso />
        <Tallas />
        <Color />
        <Estilo />
      </div>
    );
  }
}
export default Main;
