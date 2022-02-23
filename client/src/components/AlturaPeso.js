import React, { Component } from "react";
import {motion} from "framer-motion"

class AlturaPeso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: "",
      altura: "",
    };

    this.cambiarEstadoPeso = this.cambiarEstadoPeso.bind(this);
    this.cambiarEstadoAltura = this.cambiarEstadoAltura.bind(this);

    this.recogerDatoPersona = this.recogerDatoPersona.bind(this);
  }

  cambiarEstadoPeso(event) {
    this.setState({peso: event.target.value });

  }
  cambiarEstadoAltura(event) {
    this.setState({altura: event.target.value });
  }

  recogerDatoPersona() {
    console.log(this.state);
  }

  render() {
      return (
        <div>
        <motion.div
        initial={{x: "75vw"}}
        animate={{fontSize: 60, x:-50, y:0}}
        transition={{type: "spring", stiffness: 200, delay: 0.5}}>
        <br />
        <br />
        <label class="textAlturaPeso">Peso: &nbsp;</label>
        <input class="textAlturaPeso" type="text" placeholder="Ej: 70kg" onChange={this.cambiarEstadoPeso}/>
        <br />
        <br />
        <label class="textAlturaPeso">Altura: &nbsp;</label>
        <input type="text" class="textAlturaPeso" placeholder="175 cm" onChange={this.cambiarEstadoAltura}/>
        <br />
        <br />
        </motion.div>
        <motion.div
        initial={{y: "-75vw"}}
        animate={{fontSize: 60, x:0, y:0}}
        transition={{type: "spring", stiffness: 200, delay: 2}}>
        <motion.input 
        whileHover={{
          scale:1.1,
        textShadow: "0px 0px 12px rgb(214, 174, 154)",
      boxShadow: "0px 0px 12px rgb(214, 174, 154)"}} 
        type="button" value="Continuar" class="buttonFormLook" onClick={() => {this.recogerDatoPersona()}} />
        </motion.div>
        </div>
    );
  }
}
export default AlturaPeso;
