import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Mapa from "./Mapa";
import Mainhome from "../pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import RecogidaLook from "./RecogidaLook";

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
          <Route path="/Mapa" element={<Mapa />} />
          <Route path="/" element={<Mainhome />} />
          <Route path="/RecogidaLook" element={<RecogidaLook />} />
        </Routes>
 
      </div>
    );
  }
}
export default Main;
