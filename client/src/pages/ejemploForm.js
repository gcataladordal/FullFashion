import React, { Component } from "react";
import { Button, Form, Row, Container  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class UpdateProducto extends Component {
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
        return (
            <div>            
            <Container>
                <Row className="justify-content-md-center">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Introduce el ID del producto cuyo precio quieras modificar:</Form.Label>
                            <Form.Control type="text" placeholder="Introduce el ID del producto" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Introduce el nuevo precio que quieras assignar al producto:</Form.Label>
                            <Form.Control type="text" placeholder="Introduce el nuevo precio del producto" onChange={this.handleChange} />
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Row>
            </Container>
            </div>
        )
    }
}
export default UpdateProducto;
