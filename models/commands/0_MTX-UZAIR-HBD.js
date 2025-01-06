const fs = require("fs");
module.exports.config = {
  name: "hbd",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "uzairrajput", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "npxs5",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@Horiya Hiriya ")==0 || event.body.indexOf("Happy Birthday")==0 || event.body.indexOf("happy birthday")==0 || event.body.indexOf("Birthday")==0) {
    var msg = {
        body: `🎂🎂🎂🎊🎊🎉🎉\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨`,
        attachment: fs.createReadStream(__dirname + `/uzair/horiya.jpeg`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥳", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
