const Users = require("../db/models/users");

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

module.exports = {signupUser};