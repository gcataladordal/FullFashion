import React, { Component } from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }


    handleSubmit(event) {
        alert('Nombre enviado: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        console.log(this.state.value)
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nombre:
                    <input name="nombre" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                <input type="submit" value="Enviar" />
            </form>
        );
    }
}

export default NameForm; 