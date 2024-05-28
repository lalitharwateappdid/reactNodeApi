const User = require("../../models/UserModel");

const bcrypt = require("bcrypt")

exports.login = async(req,res) => {

    try{
        const {email,password} = req.body;

        const user = await  User.findOne({
            where:{
                email:email
            }
        })

        // logic if user found or not found
        if(!user){
            return res.status(400).json({
                'message':"Invalid Email or Password"
            })
        }

        else{
            const hashedPassword = user.password
            
            const isPasswordValid  = await bcrypt.compare(password,hashedPassword)

            if(!isPasswordValid){
                    res.status(400).json({
                        "message":"Password did not matched"
                    })
            }

            res.status(200).json(
                {
                    "data":user
                }
            )
        }
    }

    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}
