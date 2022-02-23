import React, { Component } from "react";
import {motion} from "framer-motion"

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
      initial={{y:"-80vw", x: 0}}
      animate={{fontSize: 60, x:0,y:0}}
      transition={{type: "spring", stiffness: 155, delay: 0.5}}
      >
        <input
          type="button"
          value="Classic"
          onClick={()=>{this.estiloRopa("classic")}}
        />
        &nbsp;&nbsp; &nbsp;&nbsp;
        <input
          type="button"
          value="Sport"
          onClick={()=>{this.estiloRopa("sport")}}
        />
 &nbsp;&nbsp; &nbsp;&nbsp;
        <input
          type="button"
          value="Fashion"
          onClick={()=>{this.estiloRopa("fashion")}}
        />
 &nbsp;&nbsp; &nbsp;&nbsp;
        <input
          type="button"
          value="Casual"
          onClick={()=>{this.estiloRopa("casual")}}
        />
      </motion.div>
    );
  }
}
export default Estilo;
