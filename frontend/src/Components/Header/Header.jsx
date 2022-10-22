import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png';
import "./style.css";

const Header = () => {
    return(
        <>
            <Navbar expand="lg" className="navContainer">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="" className="brandImage"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/" id="menu" className="nav-link">Home</NavLink>
                            <NavLink to="/signup" id="menu" className="nav-link">Signup</NavLink>
                            <NavLink to="/login" id="menu" className="nav-link">Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;