import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
    const {dispatch} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("/logout", {
            method: "GET",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({type: "loggedOut"});
            navigate("/");
        }).catch((err) => {
            console.log("Error 503 : Service Unavailable");
        })
    }, []);
}

export default Logout;