import React, { Component } from "react";
import { Checkbox, Row } from "antd";
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
      <Checkbox.Group style={{ width: "100%" }} onChange={this.onChange}>
        <Row>
          <Checkbox value="Negro" disabled={this.isDisabled("Negro")}>
          &nbsp;NEGRO
          </Checkbox>
        &nbsp;&nbsp;&nbsp;
          <Checkbox value="Azul" disabled={this.isDisabled("Azul")}>
          &nbsp;AZUL
          </Checkbox>
          &nbsp;&nbsp;&nbsp;
          <Checkbox value="Verde" disabled={this.isDisabled("Verde")}>
          &nbsp; VERDE
          </Checkbox>
          &nbsp;&nbsp;&nbsp;
          <Checkbox value="Blanco" disabled={this.isDisabled("Blanco")}>
          &nbsp;BLANCO
          </Checkbox>
          &nbsp;&nbsp;&nbsp;
          <Checkbox value="Marron" disabled={this.isDisabled("Marron")}>
          &nbsp; MARRÓN
          </Checkbox>
        </Row>
      </Checkbox.Group>
      </motion.div>
    );
  }
}

export default Color;
