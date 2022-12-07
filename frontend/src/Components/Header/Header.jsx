import React, { useContext, useState }  from "react";
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
    const [expanded, setExpanded] = useState(false); 

    const Menus = () => {
        const closeNavbar = () => {
            setExpanded(false);
        }

        if(!state){
            return(
                <>
                    <NavLink to="/" id="menu" className="nav-link" onClick={closeNavbar}>Home</NavLink>
                    <NavLink to="/signup" id="menu" className="nav-link" onClick={closeNavbar}>Signup</NavLink>
                    <NavLink to="/login" id="menu" className="nav-link" onClick={closeNavbar}>Login</NavLink>
                </>
            )
        }
        return(
            <>
                <NavLink to="/" id="menu" className="nav-link" onClick={closeNavbar}>Home</NavLink>
                <NavLink to="/posts" id="menu" className="nav-link" onClick={closeNavbar}>Posts</NavLink>
                <NavDropdown id="nav-dropdown-dark-example" title="Me" menuVariant="dark" className="navbarLink">
                    <NavLink to="/profile" id="menu" className="dropdown-item" onClick={closeNavbar}>View Profile</NavLink>
                    <NavDropdown.Divider />
                    <NavLink to="/logout" id="menu" className="dropdown-item" onClick={closeNavbar}>Logout</NavLink>
                </NavDropdown>
            </>
        )
    }

    return(
        <>
            <Navbar expand="lg" className="navContainer" expanded={expanded}>
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="" className="brandImage"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" onClick={() => setExpanded(!expanded)}/>
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