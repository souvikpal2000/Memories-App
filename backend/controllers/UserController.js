const jwt = require("jsonwebtoken");
const Users = require("../db/models/users");
require('dotenv').config();

const signupUser = async (req, res) => {
    try{
        const {fullName, userName, password, profilePic} = req.body;
        const user = await Users.findOne({userName});
        if(user){
            return res.status(409).json({success: false, message: "User already Exist"});
        }
        const newUser = new Users({
            fullName, 
            userName,
            password,
            profilePic 
        });
        await newUser.save();
        res.status(201).json({success: true, message: "User registered Successfully"});
    }catch(err){
        console.log(err);
        res.status(500).json({sucess: false, message: "Internal Server Error"});
    }
}

const loginUser = async (req, res) => {
    try{
        const {userName, password} = req.body;
        const user = await Users.findOne({userName});
        if(!user){
            return res.status(404).json({success: false, message: "This Username is not Registered"});
        }
        if(user.password !== password){
            return res.status(401).json({success: false, message: "Invalid Credentials"});
        }
        const token = jwt.sign({ _id: user._id, userName: user.userName }, process.env.SECRET_KEY);
        res.cookie("jwt", token, { expires:new Date(Date.now() + 25892000000), httpOnly:false });
        return res.status(200).json({success: true, message: "LoggedIn Successfully"});
    }catch(err){
        console.log(err);
        res.status(500).json({sucess: false, message: "Internal Server Error"});
    }
}

const logoutUser = (req, res) => {
    res.clearCookie("jwt");
    res.status(200).json({success: true, message: "LoggedOut Successfully"});
}

const authCheck = (req, res) => {
    res.status(200).json({success: true, message: "Authorized User"});
}

const getProfile = (req, res) => {
    res.status(200).json({success: true, message: req.rootUser});
}

module.exports = {signupUser, loginUser, logoutUser, authCheck, getProfile};