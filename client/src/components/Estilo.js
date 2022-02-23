import React, { Component } from "react";

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
      <div>
        <input
          type="button"
          value="classic"
          onClick={()=>{this.estiloRopa("classic")}}
        />

        <input
          type="button"
          value="sport"
          onClick={()=>{this.estiloRopa("sport")}}
        />

        <input
          type="button"
          value="fashion"
          onClick={()=>{this.estiloRopa("fashion")}}
        />

        <input
          type="button"
          value="casual"
          onClick={()=>{this.estiloRopa("casual")}}
        />
      </div>
    );
  }
}
export default Estilo;
