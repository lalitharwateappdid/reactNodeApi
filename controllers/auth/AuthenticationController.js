const User = require("../../models/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  let token;
  console.log(req.body)
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    

    // logic if user not found
    if (!user) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    } else {
      // getting stored user password from db
      const hashedPassword = user.password;

      // and then comparing it with the password we receive from the body
      const isPasswordValid = await bcrypt.compare(password, hashedPassword);

      if (!isPasswordValid) {
        res.status(400).json({
          message: "Password did not matched",
        });
      }

    //   generating token
      token = jwt.sign(
        {
          userId: user.id,
          email: user.email,
        },
        process.env.secret_key,
        { expiresIn: "10h" }
      );

      res.status(200).json({
        "data": user,
        "token":token
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong: " + err,
    });
  }
};




