import React, { Component } from "react";

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
        <input
          type="button"
          value="S"
          onClick={() => {
            this.recogerTalla("S");
          }}
        />

        <input
          type="button"
          value="M"
          onClick={() => {
            this.recogerTalla("M");
          }}
        />

        <input
          type="button"
          value="L"
          onClick={() => {
            this.recogerTalla("L");
          }}
        />

        <input
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
