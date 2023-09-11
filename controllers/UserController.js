const APP_STATUS = require("../constatnts/app_status");
const getuser = require("../middleware/userUtill/getuser");
const UserTable = require("../models/userSchema");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')

const registerUser = async(req , res)=>{
    try{
        let {username , email , password} = req.body
        let userObj = await UserTable.findOne({email : email})
        if(userObj){
            return res.status(403).json({
                status : APP_STATUS.FAILED,
                msg : "User already register"
            });
        }
        let hashPassword = await bcryptjs.hash(password,10);
        let newUser = {
            username : username,
            email , email,
            password : hashPassword
        }
        let theUser = await new UserTable(newUser).save()
        if(theUser){
            return res.status(200).json({
                status : APP_STATUS.SUCCESS,
                msg : "User Register successFully!!!",
                data : theUser
            })
        }
    }catch(error){
        return res.status(500).json({
            status : APP_STATUS.FAILED,
            msg : "internal Server Error",
            data :null,
            Error:error
        })
    }
}

const loginUser = async(req , res)=>{
    try{
        let {email , password} = req.body
        let userObj = await UserTable.findOne({email : email})
        if(!userObj){
            return res.status(403).json({
                status : APP_STATUS.FAILED,
                msg : "User Not a register",
                data:null
            });
        }
        let matchpass = await bcryptjs.compare(password,userObj.password)
        if(!matchpass){
            return res.status(401).json({
                status : APP_STATUS.FAILED,
                msg : "Wrong password",
                data : null
            });
        }
        let secretKey = process.env.SECRETKEY;
        let payload = {
            id : userObj.id,
            username : userObj.username,
            email : userObj.email
        }
        if(secretKey && payload){
            let token = await jwt.sign(payload , secretKey,{expiresIn : "3h"})
            return res.status(200).json({
                Token : token,
                status : APP_STATUS.SUCCESS,
                msg: "User Login Successfully",
                data : userObj
            })
        }
    }catch(error){
        return res.status(500).json({
            status : APP_STATUS.FAILED,
            msg : "internal Server Error",
            data :null
        })
    }
}

const getuserdata = async(req , res)=>{
    let theUser = await getuser(req , res)
    if(theUser){
        return res.status(200).json({
            msg : "User",
            status : APP_STATUS.SUCCESS,
            data : theUser
        })
    }
}

module.exports = {registerUser,loginUser,getuserdata}