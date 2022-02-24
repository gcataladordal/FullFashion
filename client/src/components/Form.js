import React, { Component } from "react";
import TipoPersona from "../components/TipoPersona";
import AlturaPeso from "../components/AlturaPeso";
import Tallas from "../components/Tallas";
import Color from "../components/Color";
import Estilo from "../components/Estilo";
import { useState } from "react"
import {Link} from "react-router-dom"

function Form() {
    
    const [showTipoPersona, setShowTipoPersona] = useState(false);
    const [showAlturaPeso, setShowAlturaPeso] = useState(false);
    const [showTallas, setShowTallas] = useState(false);
    const [showColor, setShowColor] = useState(false);
    const [showEstilo, setShowEstilo] = useState(false);
    const [showSubmit, setShowSubmit] = useState(false)


    {showSubmit == true ? <input type="submit" value="Enviar"></input> : ""}
    return (
        <div>
            <form>
                {showTipoPersona == true ? <TipoPersona /> : ""}
                {showAlturaPeso == true ? <AlturaPeso /> : ""}
                {showTallas == true ? <Tallas /> : ""}
                {showColor == true ? <Color /> : ""}
                {showEstilo == true ? <Estilo /> : ""}
            </form>
        </div>
        );
}

export default Form;