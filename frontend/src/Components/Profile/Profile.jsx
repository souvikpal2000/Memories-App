import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import "./style.css";

const Profile = () => {
    const {state} = useContext(UserContext);
    return(
        <>
            {state? <h1>LoggedIn</h1> : <h1>LoggedOut</h1>}
        </>
    )
}

export default Profile;