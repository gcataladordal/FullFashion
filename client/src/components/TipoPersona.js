import React, { Component } from "react";
import { motion } from "framer-motion"
import { Container } from "react-bootstrap";

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
      <motion.div
      initial={{y:-250, x: -75}}
      animate={{fontSize: 60, x:-75,y:0}}
      transition={{type: "spring", stiffness: 200}}
      >
        <h2>Elige tu target</h2>
        <img class="persona" width="15%" height="30%" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/muher.jpg"
          value="Mujer"
          onClick={() => { this.recogerDatoPersona("mujer") }}
        />
         &nbsp;&nbsp; &nbsp;&nbsp;
        <img class="persona" width="15%" height="30%" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/niño.jpg"
          value="Niño"
          onClick={() => { this.recogerDatoPersona("niño") }}
        />
         &nbsp;&nbsp; &nbsp;&nbsp;
        <img class="persona" width="15%" height="30%" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/niña.jpg"
          value="Niña"
          onClick={() => { this.recogerDatoPersona("niña") }}
        />
        &nbsp;&nbsp; &nbsp;&nbsp;
        <img class="persona" width="15%" height="30%" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/hombre.jpg"
          value="Hombre"
          onClick={() => { this.recogerDatoPersona("hombre") }}
        />
      </motion.div>
    );
  }
}
export default TipoPersona;
