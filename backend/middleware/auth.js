const jwt = require("jsonwebtoken");
const Users = require("../db/models/users");
require('dotenv').config();

const auth = async (req, res, next) => {
    if(!req.cookies.jwt){
        return res.status(401).json({success: false, message: "Token not Found : Unauthorized User"});
    }

    const token = req.cookies.jwt;
    try{
        const verify = jwt.verify(token, process.env.SECRET_KEY);
        const user = await Users.findOne({userName: verify.userName});
        if(user){
            req.rootUser = user;
            next();
        }
    }catch(err){
        return res.status(401).json({success: false, message: "Invalid Token : Unauthorized User"});
    }
}

module.exports = {auth};