const jwt = require('jsonwebtoken')
const APP_STATUS = require('../constatnts/app_status')

//token veryfier code
const tokenVeryfy = async(req , res , next)=>{
    try{
        let secretKey = process.env.SECRETKEY
        if(secretKey){
            let token = req.headers["x-auth-token"]
            if(!token){
                return res.status(401).json({
                    msg : "No Token Provided"
                });
            }
            if(typeof token === "string" && secretKey){
                let decodObj = await jwt.verify(token , secretKey)
                req.headers["user"] = decodObj;
                next()
            }else{
                return res.status(401).json({
                    msg : "invalide token request"
                });
            }
        }

    }catch(err){
        return res.status(403).json({
            status : APP_STATUS.FAILED,
            msg : "invalid token",
            data : null
        })
    }
}

module.exports = tokenVeryfy