import React, { Component } from "react";
import { motion } from "framer-motion"

class Estilo extends Component {
  constructor(props) {
    super(props);
    this.state = { estilo: "" };
    this.estiloRopa = this.estiloRopa.bind(this);
  }

  estiloRopa(tipo) {
    this.setState({ estiloRopa: tipo });
  }


  render() {
    console.log(this.state.estiloRopa);
    return (
      <motion.div
        initial={{ y: "-80vw", x: 0 }}
        animate={{ fontSize: 60, x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 155, delay: 0.5 }}
      >
        <h2>Qué imagen define mejor tu estilo</h2>
        <img class="persona" width="15%" height="30%" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/classic.jpg"
          value="Classic"
          onClick={() => { this.estiloRopa("classic") }}
        />
        &nbsp;&nbsp; &nbsp;&nbsp;
        <img class="persona" width="15%" height="30%" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/sport.jpg"
          value="Sport"
          onClick={() => { this.estiloRopa("sport") }}
        />
        &nbsp;&nbsp; &nbsp;&nbsp;
        <img class="persona" width="15%" height="30%" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/fashion.jpg"
          value="Fashion"
          onClick={() => { this.estiloRopa("fashion") }}
        />
        &nbsp;&nbsp; &nbsp;&nbsp;
        <img class="persona" width="15%" height="30%" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/casual2.jpg"
          value="Casual"
          onClick={() => { this.estiloRopa("casual") }}
        />
      </motion.div>
    );
  }
}
export default Estilo;
