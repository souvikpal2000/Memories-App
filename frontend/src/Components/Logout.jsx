import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { UserContext } from "../App";

const Logout = () => {
    const {dispatch} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        Cookies.remove('jwt');
        Cookies.remove('loggedInModal');
        dispatch({type: "loggedOut"});
        navigate("/");
    }, []);
}

export default Logout;