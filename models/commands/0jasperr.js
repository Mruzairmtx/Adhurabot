const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Haxy",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Jasper Wu",
  description: "noprefix",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 6,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["bakit boss", "missyou", "tara usap", "lovey, missyou", "Love you", "Miss YoU", "missmonabako", "Bakit ikikiss moba ko", "ano yon?loveyy", "missyou", "pm,may sasabihin ako" ,"kissgustoq" ,"kiss moko", "bot ngako para kang gago.", "loh mateluk ka bot ngako gago amputa", "ra bebetime", ""];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn")) {
     return api.sendMessage("️ Good Night, wifey", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "gm")) {
     return api.sendMessage(` Good morning ${name} `, threadID);
   };

  
   if ((event.body.toLowerCase() == "may bot") || (event.body.toLowerCase() == "May bot")) {
     return api.sendMessage("Tanga kaba?", threadID);
   };
  
   if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };
if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };
  
   if ((event.body.toLowerCase() == "HAHAHA") || (event.body.toLowerCase() == "hahaha")) {
     return api.sendMessage("PM, mas sasaya ka lalo", threadID);
   };

if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };
  
   if ((event.body.toLowerCase() == "loveyou") || (event.body.toLowerCase() == "Loveyou")) {
     return api.sendMessage("Loveyoumore", threadID);
   };

  
   if ((event.body.toLowerCase() == "brb") || (event.body.toLowerCase() == "Brb")) {
     return api.sendMessage(`Tyt,loveu ${name}`, threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Haxy") == 0 || (event.body.indexOf("haxy") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }