import { useContext, useEffect } from "react";
import Cookies from 'js-cookie'
import { UserContext } from "../App";

const Auth = () => {
    const {dispatch} = useContext(UserContext);
    useEffect(() => {
        if(Cookies.get("jwt")){
            dispatch({type: "loggedIn"});
        }else{
            dispatch({type: "loggedOut"});
        }
    }, []);
}

export default Auth;