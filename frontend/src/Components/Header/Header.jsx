import React, { useContext }  from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo.png';
import { UserContext } from "../../App";
import "./style.css";

const Header = () => {
    const {state} = useContext(UserContext);

    const Menus = () => {
        if(!state){
            return(
                <>
                    <NavLink to="/" id="menu" className="nav-link">Home</NavLink>
                    <NavLink to="/signup" id="menu" className="nav-link">Signup</NavLink>
                    <NavLink to="/login" id="menu" className="nav-link">Login</NavLink>
                </>
            )

        }
        return(
            <>
                <NavLink to="/" id="menu" className="nav-link">Home</NavLink>
                <NavLink to="/posts" id="menu" className="nav-link">Posts</NavLink>
                <NavDropdown id="nav-dropdown-dark-example" title="Me" menuVariant="dark" className="navbarLink">
                    <NavLink to="/profile" id="menu" className="dropdown-item">View Profile</NavLink>
                    <NavDropdown.Divider />
                    <NavLink to="/logout" id="menu" className="dropdown-item">Logout</NavLink>
                </NavDropdown>
            </>
        )
    }

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
                            <Menus/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;