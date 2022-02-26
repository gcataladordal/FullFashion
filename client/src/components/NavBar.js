import React, { useState } from "react";
import { Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {motion} from "framer-motion"


function NavBar () {
   
    const [showCerrarSesion, setshowCerrarSesion] = useState(false);
    const [showRegister, setShowRegister] = useState(true);
    const [showIniciarSesion, setshowIniciarSesion] = useState(true);

    
    function logout (){
        sessionStorage.removeItem("infoUser");
        window.location.href = "http://localhost:3000/";
    }

    
    
    window.onload = () => {
        let i = 0;   
        if (i === 0) {
          getInfo();
          i++;  
        }
    } 
    
    function getInfo() {
    let infoUser = sessionStorage.getItem("infoUser");    
    console.log(infoUser)
        if (infoUser!== null) {
            setShowRegister(false);
            setshowIniciarSesion(false);
            setshowCerrarSesion(true);
        } else {
            setShowRegister(true);
            setshowIniciarSesion(true);
            setshowCerrarSesion(false);
        }
    }
    
    
    return (
        <div className="Nav-bar container-fluid">
            <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="/"><img width="100" height="50" className="img-fluid mx-auto rounded float-start" src="https://raw.githubusercontent.com/moramraul/imagenesFashion/main/ImagenesHome/Logo2.png"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {showRegister == true ? (<Nav.Link href="/register" >Registro</Nav.Link>) : ""}
                        {showIniciarSesion == true ? (<Nav.Link href="/login" >Iniciar sesión</Nav.Link>) : ""}
                        <Nav.Link href="/mapa">Mapa</Nav.Link>
                        {showCerrarSesion == true ? (<Nav.Link onClick={logout}>Cerrar sesión</Nav.Link>) : ""}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
    
}

export default NavBar;
