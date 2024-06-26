const notification = require("firebase-admin")
require("dotenv").config()

const serviceAccount  = require("../firebase.json");

notification.initializeApp({
    credential: notification.credential.cert(serviceAccount),
    databaseURL:process.env.FIREBASE_DATABASE_URL
})

module.exports.notification = notification