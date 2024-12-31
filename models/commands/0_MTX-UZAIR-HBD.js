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
  if (event.body.indexOf("Siyani")==0 || event.body.indexOf("Seyani")==0 || event.body.indexOf("@一 Zainab 'Ꮗ")==0 || event.body.indexOf("siyani")==0) {
    var msg = {
        body: `𝑨𝑯𝑨𝑫 𝑲𝑰 𝑻𝑨𝑹𝑹𝑨𝑭 𝑪 𝑨𝑷𝑲𝑶 𝑯𝑨𝑷𝑷𝒀 𝑩𝑰𝑹𝑻𝑯𝑫𝑨𝒀 𝑴𝑰𝑺𝑺 𝑺𝑬𝒀𝑨𝑵𝑰.🎂🎂🎂🎊🎊🎉🎉\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨`,
        attachment: fs.createReadStream(__dirname + `/uzair/uzair.jpg`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥳", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
