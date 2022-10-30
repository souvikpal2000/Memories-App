import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import FileBase64 from "react-file-base64";
import SignupPic from "../../images/signup.jpg";
import ShowPasswordIcon from "../../images/showPassword.png";
import HidePasswordIcon from "../../images/hidePassword.png";
import DefaultProfilePic from "../../images/defaultprofilepic.jpg";
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

    const [userInfo, setUserInfo] = useState({
        fullName: "",
        userName: "",
        password: "",
        conPassword: "",
        profilePic: {
            name: "defaultprofilepic.jpg",
            fileSize: 6275.25,
            base64: DefaultProfilePic
        }
    });

    const [alert, setAlert] = useState("");
    const [passwordValidation, setPasswordValidation] = useState({
        password: "",
        conPassword: ""
    });

    const setInfo = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(name === "password"){
            const pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
            if(value.match(pass)){
                setPasswordValidation({
                    password: "is-valid",
                    conPassword:    value !== userInfo.conPassword && userInfo.conPassword.length !== 0? "is-invalid" : 
                                    value !== userInfo.conPassword && userInfo.conPassword.length === 0? "" : 
                                    value === userInfo.conPassword && userInfo.conPassword.length !== 0? "is-valid" : null
                });
            }else{
                let conPasswordLength = userInfo.conPassword.length; 
                if(value.length === 0){
                    conPasswordLength = 0;
                    setUserInfo((preValue) => {
                        return{
                            ...preValue,
                            conPassword: ""
                        }
                    });
                }
                setPasswordValidation({
                    password: value.length === 0? "" : "is-invalid",
                    conPassword: (value !== userInfo.conPassword && conPasswordLength !== 0)? "is-invalid" : ""
                })
            } 
        }

        if(name === "conPassword"){
            if(value === userInfo.password){
                setPasswordValidation((preValue) => {
                    return{
                        ...preValue,
                        [name]: value.length === 0? "" : "is-valid"
                    }
                });
            }else{
                setPasswordValidation((preValue) => {
                    return{
                        ...preValue,
                        [name]: value.length === 0? "" : "is-invalid"
                    }
                });
            }
        }

        setUserInfo((preValue) => {
            return{
                ...preValue,
                [name]: value
            }
        })
    }

    const setProfilePic = (filebase64) => {
        setAlert("");
        
        const n = filebase64.base64.length;
        const x = filebase64.base64.endsWith("==") === true? 2 : filebase64.base64.endsWith("=") === true? 1 : 0;
        const fileSize = (n * 0.75) - x; // File Size in bytes

        const fileType = ['image/jpeg', 'image/png'];
        if(fileType.includes(filebase64.type)){
            if(fileSize > 10000000){ // File Upload limited upto 10mb
                setAlert({
                    type: "danger",
                    message: "File Size must be less than 10mb"
                });
                return;
            }
            setUserInfo((preValue) => {
                return{
                    ...preValue,
                    profilePic: {
                        name: filebase64.name,
                        fileSize: fileSize,
                        base64: filebase64.base64
                    }
                }
            });
            return;
        }

        setAlert({
            type: "danger",
            message: "Supported File Type - jpeg/png"
        })
    }

    const changeVisibility = (e) => {
        const name = e.target.name;
        setShowPassword((preValue) => {
            return{
                ...preValue,
                [name]: {
                    show: !preValue[name].show,
                    type: !preValue[name].show === true? "text" : "password"   
                }
            }
        })
    }

    const submitForm = async (e) => {
        e.preventDefault();
        if(userInfo.password !== userInfo.conPassword){
            setAlert({
                type: "danger",
                message: "Password doesn't Match"
            });
            return;
        }

        try{
            const res = await fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userInfo)
            });
            const data = await res.json();
            if(data.success){
                setAlert({
                    type: "success",
                    message: data.message
                });
                setUserInfo({
                    fullName: "",
                    userName: "",
                    password: "",
                    conPassword: "",
                    profilePic: {
                        name: "defaultprofilepic.jpg",
                        fileSize: 6275.25, 
                        base64: DefaultProfilePic
                    }
                });
                setPasswordValidation({
                    password: "",
                    conPassword: ""
                });
            }else{
                setAlert({
                    type: "danger",
                    message: data.message
                });
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
            <Container className="signupContainer">
                <Row>
                    <Col md={6} className="signup-left">
                        <img src={SignupPic} alt="" className="signupImg"/>
                    </Col>
                    <Col md={6} className="signup-right">
                        {   
                            alert && 
                            <Alert variant={alert.type} onClose={() => setAlert("")} dismissible>
                                <p>{alert.message}</p>
                            </Alert>
                        }
                        <Form className="signupForm" onSubmit={submitForm}>
                            <Form.Group>
                                <Row className="inputFields">
                                    <Col md={6}>
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" name="fullName" value={userInfo.fullName} onChange={setInfo} required />
                                    </Col>
                                    <Col md={6} className="inputColumn">
                                        <Form.Label>Username</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text><span className="atTheRate">@</span></InputGroup.Text>
                                            <Form.Control type="text" name="userName" value={userInfo.userName} onChange={setInfo} required />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row className="inputFields">
                                    <Col md={12}>
                                        <Form.Label>Password</Form.Label>
                                        <InputGroup>
                                            <Form.Control type={showPassword.password.type} name="password" value={userInfo.password} onChange={setInfo} className={passwordValidation.password} required />
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
                                            <Form.Control type={showPassword.conPassword.type} name="conPassword" value={userInfo.conPassword} onChange={setInfo} className={passwordValidation.conPassword} required />
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
                                    <Col md={12} className="fileInputField">
                                        <Form.Label>Profile Picture</Form.Label>
                                        <div className="fileDiv">
                                            <FileBase64 name="profilePic" type="file" multiple={false} value={userInfo.profilePic.name} onDone={setProfilePic} />
                                        </div>
                                        {/* Checking whether FileBase64 is working or not */}
                                        {/* <img src={userInfo.profilePic.base64} alt={userInfo.profilePic.name}/> */}
                                    </Col>
                                </Row>
                                <Row className="inputFields button">
                                    <button>Signup</button>
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