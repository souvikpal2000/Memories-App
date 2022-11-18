import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import AddPostModal from "./AddPostModal";
import MyPost from "./MyPost";
import "./style.css";

const Profile = () => {
    const [spinner, setSpinner] = useState(true);
    const [profile, setProfile] = useState({
        fullName: "",
        userName: "",
        profilePic: ""
    });
    const [memories, setMemories] = useState([]);
    const [addPostModal, setAddPostModal] = useState(false);

    const closeSpinnerIn1Seconds = () => {
        setTimeout(() => {
            setSpinner(false);
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
                const { fullName, userName, profilePic } = data.message;
                setProfile({
                    fullName,
                    userName,
                    profilePic
                })
                closeSpinnerIn1Seconds();
            }); 
        }).catch((err) => {
            console.log("Error 503 : Service Unavailable");
        })
    }, []);

    const openAddPostModal = () => {
        setAddPostModal(true);
    }

    return(
        <>
            {spinner ? 
            <div className="spinnerContainer">
                    <Spinner animation="border" variant="primary" />
            </div> : 
            <Container className="profileContainer">
                <div className="profileDetails">
                    <div className="firstDiv">
                        <div className="profilePic">
                            <img src={profile.profilePic.base64} alt={profile.profilePic.name} className="picture" />
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
                                    <h4 className="fullName">{profile.fullName}</h4>
                                    <p className="userName">{profile.userName}</p>
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
                                <Button variant="success" className="add" onClick={openAddPostModal}>Add Post</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="horizontalLine"></div>
                <AddPostModal addPostModal={addPostModal} setAddPostModal={setAddPostModal} memories={memories} setMemories={setMemories}/>
                <MyPost memories={memories} profile={profile} />
            </Container>}      
        </>
    )
}

export default Profile;