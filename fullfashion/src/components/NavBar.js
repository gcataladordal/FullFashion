import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container fluid >
                        <Navbar.Brand href="/">Volver al Inicio</Navbar.Brand>
                        <Nav className="mx-auto">
                            <Nav.Link href="/Register">Registro</Nav.Link>
                            <Nav.Link href="/Login">Iniciar sesión</Nav.Link>
                            <Nav.Link href="/Mapa">Mapa</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default NavBar;
