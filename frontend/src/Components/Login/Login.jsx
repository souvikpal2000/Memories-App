import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import LoginImg from "../../images/login.jpg";
import { UserContext } from "../../App";
import "./style.css";

const Login = () => {
    const [showPassword, setShowPassword] = useState({
        show: false,
        type: "password"
    });

    const [loginInfo, setLoginInfo] = useState({
        userName: "",
        password: ""
    });

    const [alert, setAlert] = useState("");

    const {dispatch} = useContext(UserContext);
    const navigate = useNavigate();

    const changeVisibility = () => {
        setShowPassword({
            show: !showPassword.show,
            type: !showPassword.show === true? "text" : "password"
        })
    } 

    const setInfo = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLoginInfo((preValue) => {
            return{
                ...preValue,
                [name]: value
            }
        });
    }

    const auth = () => {
        if(Cookies.get("jwt")){
            dispatch({type: "loggedIn"});
        }else{
            dispatch({type: "loggedOut"});
        }
    }

    const submitForm = async (e) => {
        e.preventDefault();

        try{
            const res = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginInfo)
            });
    
            const data = await res.json();
    
            if(data.success){
                auth();
                Cookies.set('loggedInModal', 'open');
                navigate("/");
            }else{
                setAlert({
                    type: "danger",
                    message: data.message
                })
            }
        }catch(err){
            setAlert({
                type: "danger",
                message: "Error 503 : Service Unavailable"
            });
        }
    }

    return(
        <>
            <Container className="loginContainer">
                <Row>
                    <Col md={6} className="login-left">
                        <img src={LoginImg} alt="" className="loginImg"/>
                    </Col>
                    <Col md={6} className="login-right">
                        {   
                            alert && 
                            <Alert variant={alert.type} onClose={() => setAlert("")} dismissible>
                                <p>{alert.message}</p>
                            </Alert>
                        }
                        <Form className="loginForm" onSubmit={submitForm}>
                            <Row className="inputFields">
                                <Col>
                                    <Form.Label>Username</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text><span className="atTheRate">@</span></InputGroup.Text>
                                        <Form.Control type="text" name="userName" value={loginInfo.userName} onChange={setInfo} required />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row className="inputFields">
                                <Col md={12}>
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control type={showPassword.type} name="password" value={loginInfo.password} onChange={setInfo} required />
                                        { showPassword.show === false?  
                                            <InputGroup.Text>
                                                <EyeFill className="showPasswordIcon" alt="ShowPasswordIcon" onClick={changeVisibility} />
                                            </InputGroup.Text> : 
                                            <InputGroup.Text>
                                                <EyeSlashFill className="hidePasswordIcon" alt="HidePasswordIcon" onClick={changeVisibility} />
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