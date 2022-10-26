import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ErrorImg from "../../images/404.jpg";
import "./style.css";

const PageNotFound = () => {
    return(
        <>
            <Container className="errorContainer">
                <img src={ErrorImg} alt="Page Not Found" />
                <h1 className="pageNotFndErrMsg">Page Not Found!!!</h1>
                <NavLink to="/" className="goBack">Go Back</NavLink>
            </Container>
        </>
    )
}

export default PageNotFound;