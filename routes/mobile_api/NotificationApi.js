const sendNotification = require("../../config/notification");
const notification = require("../../models/NotificationModel");
const db = require("../../database/database");

 function sendScheduledNotification() {
  try {
    const TodayNotification =  notification.findAll();

    console.log("hello" + TodayNotification)

    // sendNotification.forEach((notify) => {
    //   const message = {
    //     notification: {
    //       title: `${notify.title}`,
    //       body: `${notify.content}`,
    //     },
    //     topic: "global",
    //   };

    //   const notify = sendNotification
    //     .messaging()
    //     .send(message)
    //     .then((response) => {
    //       console.log("Successfully sent global notification:", response);
    //     })
    //     .catch((error) => {
    //       console.error("Error sending global notification:", error);
    //     });
    // });
  } catch (error) {
    console.log("Something went wrong " + error);
  }
}

module.exports = sendScheduledNotification;
