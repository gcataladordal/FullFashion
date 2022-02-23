import React, { Component } from "react";
import {motion} from "framer-motion"

class Tallas extends Component {
  constructor(props) {
    super(props);
    this.state = { talla: "" };

    this.recogerTalla = this.recogerTalla.bind(this);
  }

  recogerTalla(medida) {
    this.setState({ talla: medida });
  }

  render() {
    console.log(this.state.talla);
    return (
      <div>
        <br/>
        <motion.input
        initial={{x: "-100vw"}}
        animate={{fontSize: 60, x:-75,y:0}}
        transition={{type: "spring", stiffness: 200}}
        whileHover={{scale: 1.1}}
        class="buttonFormLook"
          type="button"
          value="S"
          onClick={() => {
            this.recogerTalla("S");
          }}
        />

        <motion.input
        initial={{x: "-100vw"}}
        animate={{fontSize: 60, x:-25,y:0}}
        transition={{type: "spring", stiffness: 200}}
        whileHover={{scale:1.1}} 
        class="buttonFormLook"
          type="button"
          value="M"
          onClick={() => {
            this.recogerTalla("M");
          }}
        />

        <motion.input
        initial={{x: "-100vw"}}
        animate={{fontSize: 60, x:25,y:0}}
        transition={{type: "spring", stiffness: 200}}
        whileHover={{scale:1.1}} 
        class="buttonFormLook"
          type="button"
          value="L"
          onClick={() => {
            this.recogerTalla("L");
          }}
        />

        <motion.input
        initial={{x: "-100vw"}}
        animate={{fontSize: 60, x:75,y:0}}
        transition={{type: "spring", stiffness: 200}}
        whileHover={{scale:1.1}} 
        class="buttonFormLook"
          type="button"
          value="XL"
          onClick={() => {
            this.recogerTalla("XL");
          }}
        />
      </div>
    );
  }
}
export default Tallas;
