const express = require("express");
const app = express();

const sendNotification = require("../../config/notification");
const notification = require("../../models/NotificationModel");
const db = require("../../database/database");

//  function sendScheduledNotification() {
//   try {
//     const TodayNotification =  notification.findAll();

//     console.log("hello")

//     // sendNotification.forEach((notify) => {
//     //   const message = {
//     //     notification: {
//     //       title: `${notify.title}`,
//     //       body: `${notify.content}`,
//     //     },
//     //     topic: "global",
//     //   };

//     //   const notify = sendNotification
//     //     .messaging()
//     //     .send(message)
//     //     .then((response) => {
//     //       console.log("Successfully sent global notification:", response);
//     //     })
//     //     .catch((error) => {
//     //       console.error("Error sending global notification:", error);
//     //     });
//     // });
//   } catch (error) {
//     console.log("Something went wrong " + error);
//   }
// }

const sendScheduledNotification = async() => {
  try{
    const TodaysNotifications = await notification.findOne();
    if (Array.isArray(TodaysNotifications)) {
      if (TodaysNotifications.length > 0) {
        // Log each notification's attributes
        sendNotification.forEach((notify) => {
      const message = {
        notification: {
          title: `${notify.title}`,
          body: `${notify.content}`,
        },
        topic: "global",
      };

      sendNotification
        .messaging()
        .send(message)
        .then((response) => {
          console.log("Successfully sent global notification:", response);
        })
        .catch((error) => {
          console.error("Error sending global notification:", error);
        });
    });
      } else {
        console.log("No notifications found for today.");
      }
    } else {
      console.log("TodaysNotifications is not an array:", TodaysNotifications);
    }
  }
  catch(err){
    console.log("Something went wrong " + err)
  }
}

module.exports = sendScheduledNotification;
