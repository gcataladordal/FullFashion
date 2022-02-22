import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TipoPersona from "./TipoPersona";
import AlturaPeso from "./AlturaPeso";
import Tallas from "./Tallas";
import Color from "./Color";
import Estilo from "./Estilo";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        <TipoPersona />
        <AlturaPeso />
        <Tallas />
        <Color/>
        <Estilo />
      </div>
    );
  }
}
export default Main;
