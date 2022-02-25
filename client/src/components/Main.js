import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Form from "../pages/Form";
import Mapa from "./Mapa";
import Home from "../pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {motion} from "framer-motion"
import RecogidaLook from "./RecogidaLook";
import ResultadoLook from "../pages/ResultadoLook";
import Payment from "./stripe";

class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/form" element={<Form />} />
          <Route path="/recogidaLook" element={<RecogidaLook />} />
          <Route path="/resultadoLook" element={<ResultadoLook />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    );
  }
}
export default Main;
