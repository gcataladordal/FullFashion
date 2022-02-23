import React, { Component } from "react";
import { Checkbox, Row } from "antd";

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
      <Checkbox.Group style={{ width: "100%" }} onChange={this.onChange}>
        <Row>
          <Checkbox value="Negro" disabled={this.isDisabled("Negro")}>
            NEGRO
          </Checkbox>

          <Checkbox value="Azul" disabled={this.isDisabled("Azul")}>
            AZUL
          </Checkbox>

          <Checkbox value="Verde" disabled={this.isDisabled("Verde")}>
            VERDE
          </Checkbox>

          <Checkbox value="Blanco" disabled={this.isDisabled("Blanco")}>
            BLANCO
          </Checkbox>

          <Checkbox value="Marron" disabled={this.isDisabled("Marron")}>
            MARRÓN
          </Checkbox>
        </Row>
      </Checkbox.Group>
    );
  }
}

export default Color;
