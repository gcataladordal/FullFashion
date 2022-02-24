import React, { Component } from "react";
import { Checkbox, Row, Col } from "antd";
import {motion} from "framer-motion"

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [],
    };
  }

  onChange = (checkedValues) => {
    this.setState(() => {
    
      return { color: checkedValues };
    });
  };

  isDisabled = (id) => {
    return (
      this.state.color.length > 1 && this.state.color.indexOf(id) === -1
    );
  };
  render() {
    console.log(this.state.color);
    return (
      <motion.div
      initial={{y:"75vw", x: 0}}
      animate={{fontSize: 60, x:0,y:0}}
      transition={{type: "spring", stiffness: 155, delay: 0.5}}
      >
        <h2>Elige uno o dos colores</h2>
      <Checkbox.Group onChange={this.onChange}>
    
          <Checkbox className="color" value="Negro" id="negro" disabled={this.isDisabled("Negro")}>
          <img width="10%" height="5%" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/black.jpg"></img>
          </Checkbox>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <Checkbox className="color" value="Azul" id="azul" disabled={this.isDisabled("Azul")}>
          <img width="10%" height="5%" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/bluelight.jpg"></img>
          </Checkbox>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <Checkbox className="color" value="Verde" id="verde" disabled={this.isDisabled("Verde")}>
          <img width="10%" height="5%" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/green.jpg"></img>
          </Checkbox>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <Checkbox className="color" value="Blanco" id="blanco" disabled={this.isDisabled("Blanco")}>
          <img width="10%" height="5%" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/white.jpg"></img>
          </Checkbox>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <Checkbox className="color" value="Marron" id="marron" disabled={this.isDisabled("Marron")}>
          <img width="10%" height="5%" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesFormulario/brown.jpg"></img>
          </Checkbox>
        
      </Checkbox.Group>
      </motion.div>
    );
  }
}

export default Color;
