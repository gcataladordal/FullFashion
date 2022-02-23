import React from "react";
import TipoPersona from "../components/TipoPersona";
import AlturaPeso from "../components/AlturaPeso";
import Tallas from "../components/Tallas";
import Color from "../components/Color";
import Estilo from "../components/Estilo";
import { useState } from "react"
import {motion} from "framer-motion"

function Form() {
    
    const [showTipoPersona, setShowTipoPersona] = useState(true);
    const [showAlturaPeso, setShowAlturaPeso] = useState(true);
    const [showTallas, setShowTallas] = useState(true);
    const [showColor, setShowColor] = useState(true);
    const [showEstilo, setShowEstilo] = useState(true);
    const [showSubmit, setShowSubmit] = useState(true)

    return (
        <div>
            <form>
                {showTipoPersona === true ? <TipoPersona /> : ""}
                <br />
                {showAlturaPeso === true ? <AlturaPeso /> : ""}
                <br />
                {showTallas === true ? <Tallas /> : ""}
                <br />
                {showColor === true ? <Color /> : ""}
                <br />
                {showEstilo === true ? <Estilo /> : ""}
                <br />
                <br />
                {showSubmit === true ? <motion.input
                initial={{y: 0, x: "-200vw"}}
                animate={{fontSize: 60, scale: 1.5, x:0,y:0}}
                transition={{type: "spring", stiffness: 155, delay: 3}}
                type="submit" value="Finalizar" /> : ""}
            </form>
        </div>
        );
}

export default Form;