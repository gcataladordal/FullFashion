import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Form from "../pages/Form";
import Mapa from "./Mapa";
import Mainhome from "../pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import {motion} from "framer-motion"
import RecogidaLook from "./RecogidaLook";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Mainhome />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Mapa" element={<Mapa />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/RecogidaLook" element={<RecogidaLook />} />
        </Routes>
      </div>
    );
  }
}
export default Main;
