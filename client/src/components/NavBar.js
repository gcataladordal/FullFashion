import React, { Component } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from "framer-motion"

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="Nav-bar container-fluid">
                <Navbar>
                    <Container fluid>
                    <Navbar.Brand href="/"><img width="100" height="50" class="img-fluid mx-auto rounded float-start" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesHome/Logo2.png"/></Navbar.Brand>
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
