import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import "./style.css";

const Profile = () => {
    const [state, setState] = useState({
        spinner: true,
        profile: null
    });

    const closeSpinnerIn1Seconds = () => {
        setTimeout(() => {
            setState((preValue) => {
                return{
                    ...preValue,
                    spinner: false
                }
            });
        }, 1000);
    }

    useEffect(() => {
        fetch("/profile", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            res.json().then((data) => {
                setState((preValue) => {
                    return{
                        ...preValue,
                        profile: data.message
                    }
                });
                closeSpinnerIn1Seconds();
            }); 
        }).catch((err) => {
            console.log("Error 503 : Service Unavailable");
        })
    }, []);

    return(
        <>
            {state.spinner ? 
            <div className="spinnerContainer">
                    <Spinner animation="border" variant="primary" />
            </div> : 
            <Container className="profileContainer">
                <div className="profileDetails">
                    <div className="firstDiv">
                        <div className="profilePic">
                            <img src={state.profile.profilePic.base64} alt={state.profile.profilePic.name} className="picture" />
                        </div>
                        <div className="responsiveInfo">
                            <p className="posts"><b>0</b> posts</p>
                            <p className="followers"><b>0</b> followers</p>
                            <p className="following"><b>0</b> following</p>
                        </div>
                    </div>
                    <div className="secondDiv">
                        <div className="responsive">
                            <div className="profileInfo">
                                <div>
                                    <h4 className="fullName">{state.profile.fullName}</h4>
                                    <p className="userName">{state.profile.userName}</p>
                                    <p className="bio">There's so many words that we could use to describe ourselves, but we find the good ones and remember them.<br/>-Anna Simpson</p>
                                </div>
                                <div className="info">
                                    <p className="posts"><b>0</b> posts</p>
                                    <p className="followers"><b>0</b> followers</p>
                                    <p className="following"><b>0</b> following</p>
                                </div>
                            </div>
                            <div className="editButton">
                                <Button variant="primary" className="edit">Edit</Button>
                                <Button variant="success" className="add">Add Post</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="horizontalLine"></div>
            </Container>}
        </>
    )
}

export default Profile;