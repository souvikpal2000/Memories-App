import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SignupPic from "../../images/signup.jpg";
import ShowPasswordIcon from "../../images/showPassword.png";
import HidePasswordIcon from "../../images/hidePassword.png";
import './style.css';

const Signup = () => {
    const [showPassword, setShowPassword] = useState({
        password: {
            show: false,
            type: "password"
        },
        conPassword: {
            show: false,
            type: "password"
        }
    });

    const changeVisibility = (e) => {
        const name = e.target.name;
        setShowPassword((preValue) => {
            return{
                ...preValue,
                [name]: {
                    show: !preValue[name].show,
                    type: !preValue[name].show == true? "text" : "password"   
                }
            }
        })
    }

    return(
        <>
            <Container className="signupContainer">
                <Row>
                    <Col md={6} className="main-header-left">
                        <img src={SignupPic} alt="" className="signupImg"/>
                    </Col>
                    <Col md={6} className="main-header-right">
                        <Form>
                            <Form.Group>
                                <Row className="inputFields">
                                    <Col md={6}>
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" name="fullName" required />
                                    </Col>
                                    <Col md={6}>
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
                                            <Form.Control type={showPassword.password.type} name="password" required />
                                            { showPassword.password.show === false?  
                                            <InputGroup.Text>
                                                <img src={ShowPasswordIcon} className="showPasswordIcon" alt="ShowPasswordIcon" name="password" onClick={changeVisibility} />
                                            </InputGroup.Text> : 
                                            <InputGroup.Text>
                                                <img src={HidePasswordIcon} className="hidePasswordIcon" alt="HidePasswordIcon" name="password" onClick={changeVisibility} />
                                            </InputGroup.Text> }
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row className="inputFields">
                                    <Col md={12}>
                                        <Form.Label>Confirm Password</Form.Label>
                                        <InputGroup>
                                            <Form.Control type={showPassword.conPassword.type} name="password" required />
                                            { showPassword.conPassword.show === false?  
                                            <InputGroup.Text>
                                                <img src={ShowPasswordIcon} className="showPasswordIcon" alt="ShowPasswordIcon" name="conPassword" onClick={changeVisibility} />
                                            </InputGroup.Text> : 
                                            <InputGroup.Text>
                                                <img src={HidePasswordIcon} className="hidePasswordIcon" alt="HidePasswordIcon" name="conPassword" onClick={changeVisibility} />
                                            </InputGroup.Text> }
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row className="inputFields">
                                    <Col md={12}>
                                        <Form.Label>Profile Picture</Form.Label>
                                        <Form.Control type="file" />
                                    </Col>
                                </Row>
                                <Row className="inputFields button">
                                    <button>Submit</button>
                                </Row>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Signup;