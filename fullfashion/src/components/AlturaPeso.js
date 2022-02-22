import React, { Component } from "react";

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
        <br />
        <br />
        <label>Peso</label>
        <input type="text" placeholder="Ej: 70kg" onChange={this.cambiarEstadoPeso}/>
        <br />
        <br />
        <label>Altura</label>
        <input type="text" placeholder="175 cm" onChange={this.cambiarEstadoAltura}/>
        <br />
        <br />
        <input type="button" value="Continuar" onClick={() => {this.recogerDatoPersona()}} />
      </div>
    );
  }
}
export default AlturaPeso;
