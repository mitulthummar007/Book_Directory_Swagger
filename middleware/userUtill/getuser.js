const mongoose = require("mongoose");
const APP_STATUS = require("../../constatnts/app_status");
const UserTable = require("../../models/userSchema");

//get user data 
const getuser = async(req , res)=>{
    try{
    let theUser = req.headers["user"];
    let userId = theUser.id;
    if(!userId){
        return res.status(403).json({
            msg : "invalide user request"
        });
    }
    let mongoUserId = await new mongoose.Types.ObjectId(userId);
    let userObj = await UserTable.findById(mongoUserId);
    if(!userObj){
        return res.status(403).json({
            msg : "User Not Found"
        });
    }
    return userObj

    }catch(err){
        return res.status(500).json({
            msg : "internal server error"
        })
    }
}

module.exports = getuser