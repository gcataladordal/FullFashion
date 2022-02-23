import React, { Component } from "react";
import {motion} from "framer-motion"

class TipoPersona extends Component {
  constructor(props) {
    super(props);
    this.state = { tipoPersona: "" };
    this.recogerdatoPersona = this.recogerDatoPersona.bind(this);
  }

  recogerDatoPersona(tipo) {
    this.setState({ tipoPersona: tipo });
}


render() {
      console.log(this.state.tipoPersona);
    return (
      <div>
        <motion.input 
        initial={{y:-250, x: -75}}
        animate={{fontSize: 60, x:-75,y:0}}
        transition={{type: "spring", stiffness: 200}}
        whileHover={{scale:1.1}} 
        class="buttonFormLook"
          type="button"
          value="Mujer"
          onClick={()=>{this.recogerDatoPersona("mujer")}}
        />

        <motion.input
        initial={{y:-250, x: -25}}
        transition={{type: "spring", stiffness: 200}}
        animate={{fontSize: 60, x:-25,y:0}}
        whileHover={{scale:1.1}} 
        class="buttonFormLook"
          type="button"
          value="Hombre"
          onClick={()=>{this.recogerDatoPersona("hombre")}}
        />

        <motion.input
          initial={{y:-250, x: 25}}
          transition={{type: "spring", stiffness: 200}}
          animate={{fontSize: 60, x:25,y:0}}
          whileHover={{scale:1.1}} 
         class="buttonFormLook"
          type="button"
          value="Niña"
          onClick={()=>{this.recogerDatoPersona("niña")}}
        />

        <motion.input
         initial={{y:-250, x: 75}}
         transition={{type: "spring", stiffness: 200}}
         animate={{fontSize: 60, x:75,y:0}}
         whileHover={{scale:1.1}} 
        class="buttonFormLook"
          type="button"
          value="Niño"
          onClick={()=>{this.recogerDatoPersona("niño")}}
        />
      </div>
    );
  }
}
export default TipoPersona;
