const express = require('express')
const app = express()
const cron = require('node-cron')
const sendScheduledNotification = require("../routes/mobile_api/NotificationApi")


cron.schedule(' 35 12  * * *',sendScheduledNotification)

// 0 stands for minutes
// 19 stands for hours 7:00PM
// * stands for any day of month
// * any month
// * any week