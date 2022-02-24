import React, { Component } from "react";
import { Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {motion} from "framer-motion"


class NavBar extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="Nav-bar container-fluid">
                <Navbar collapseOnSelect expand="lg">

                <Navbar.Brand href="/"><img width="100" height="50" className="img-fluid mx-auto rounded float-start" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesHome/Logo2.png"/></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/Register">Registro</Nav.Link>
                            <Nav.Link href="/Login">Iniciar sesión</Nav.Link>
                            <Nav.Link href="/Mapa">Mapa</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
