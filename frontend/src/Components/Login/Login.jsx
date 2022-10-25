import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import LoginImg from "../../images/login.jpg";
import ShowPasswordIcon from "../../images/showPassword.png";
import HidePasswordIcon from "../../images/hidePassword.png";
import "./style.css";
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState({
        show: false,
        type: "password"
    });

    const changeVisibility = () => {
        setShowPassword({
            show: !showPassword.show,
            type: !showPassword.show === true? "text" : "password"
        })
    } 

    return(
        <>
            <Container className="loginContainer">
                <Row>
                    <Col md={6} className="login-left">
                        <img src={LoginImg} alt="" className="loginImg"/>
                    </Col>
                    <Col md={6} className="login-right">
                        <Form className="loginForm">
                            <Row className="inputFields">
                                <Col>
                                    <Form.Label>Username</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text><span className="atTheRate">@</span></InputGroup.Text>
                                        <Form.Control type="text" name="userName" required />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row className="inputFields">
                                <Col md={12}>
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control type={showPassword.type} name="password" required />
                                        { showPassword.show === false?  
                                            <InputGroup.Text>
                                                <img src={ShowPasswordIcon} className="showPasswordIcon" alt="ShowPasswordIcon" onClick={changeVisibility} />
                                            </InputGroup.Text> : 
                                            <InputGroup.Text>
                                                <img src={HidePasswordIcon} className="hidePasswordIcon" alt="HidePasswordIcon" onClick={changeVisibility} />
                                            </InputGroup.Text> }
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row className="inputFields button">
                                <button>Login</button>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;