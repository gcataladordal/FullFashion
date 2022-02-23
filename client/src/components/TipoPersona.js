import React, { Component } from "react";

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
        <input
          type="button"
          value="Mujer"
          onClick={()=>{this.recogerDatoPersona("mujer")}}
        />

        <input
          type="button"
          value="Hombre"
          onClick={()=>{this.recogerDatoPersona("hombre")}}
        />

        <input
          type="button"
          value="Niña"
          onClick={()=>{this.recogerDatoPersona("niña")}}
        />

        <input
          type="button"
          value="Niño"
          onClick={()=>{this.recogerDatoPersona("niño")}}
        />
      </div>
    );
  }
}
export default TipoPersona;
