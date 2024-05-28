const jwt = require("jsonwebtoken");
const secret_key = require("../config/secret_key");

const verifyToken = async(req,res,next) => {
    const token = req.headers.authorization;
   
    if(!token){
        res.status(400).json({
            "message":"Access Denied. No token provided"
        })
    }

    try{    
        const splitToken = token.split(" ");
        const decoded_jwt_token = splitToken[1];

        const decode = jwt.verify(decoded_jwt_token,secret_key)
        // res.status(200).json({
        //     "token":decode
        // })
        req.user = decode;
        next();
    }   
    catch(err){
        return res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
    


}


module.exports = {verifyToken}