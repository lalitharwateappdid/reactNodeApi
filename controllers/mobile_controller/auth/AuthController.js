const User = require("../../../models/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    const { email, password } = req.body;




    try {
        let user = await User.findOne({
            where: {
                email: email
            }
        })

        if (user) {
            let isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({
                    "message": "Invalid Credentails",
                    "status": false
                })
            }

            const payload = {
                user: {
                    id: user.id,
                    email: user.email
                }
            }

            jwt.sign(payload, process.env.secret_key, { expiresIn: '1h' }, (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    "token": token,
                    "status": true
                })
            });

        }

        else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            let user = await User.create({
                email: email,
                password: password
            })

            const payload = {
                user: {
                    id: user.id,
                    email: user.email
                }
            }

            jwt.sign(payload, process.env.secret_key, { expiresIn: "1h" }, (err, token) => {
                if (err) {
                    throw err;
                }
                else {
                    res.status(200).json({
                        "token": token,
                        "message": "user created successfully"
                    })
                }

            })


        }
    }
    catch (err) {
        res.status(400).json({
            'message': "Something went wrong " + err
        })
    }
};