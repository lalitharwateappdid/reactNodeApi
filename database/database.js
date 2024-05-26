// require("dotenv").config()
// const mysql = require("mysql2");



// const db = mysql.createConnection({
//     host:process.env.host,
//     user:process.env.user,
//     database:process.env.dbname
// });

// db.connect(err => {
//     if(err){
//         console.log("Error in connecting db",err);
//     }
//     else{

//     console.log('====================================');
//     console.log("MySQL connected");
//     console.log('====================================');
//     }
// });

// module.exports = db;


// adding Sequelize


require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.dbname,
    process.env.user, null, {
    host: "localhost",
    dialect: "mysql"
});


module.exports = sequelize