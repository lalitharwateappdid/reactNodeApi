const jwt = require("jsonwebtoken");
require("dotenv").config()

const verifyToken = async(req,res,next) => {
    const token = req.headers.authorization;
   
    
    try{    
        
        const splitToken = token.split(" ");
        const decoded_jwt_token = splitToken[1];

        const decode = jwt.verify(decoded_jwt_token,process.env.secret_key)
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