const fs = require("fs");
module.exports.config = {
	name: "nikal",
    version: "1.0.0",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Nikal")==0 || (event.body.indexOf("nikal")==0)) || (event.body.indexOf(".kick")==0 || (event.body.indexOf(".Kick")==0 {
		var msg = {
				body: "𝐂𝐇𝐀𝐋 𝐍𝐈𝐊𝐀𝐋 𝐓𝐔 𝐘𝐀𝐇𝐀 𝐂 𝐓𝐔 𝐇𝐀𝐈 𝐊𝐎𝐍 𝐌𝐔𝐉𝐇𝐄 𝐎𝐑𝐃𝐄𝐑 𝐃𝐄𝐍𝐄 𝐖𝐀𝐋𝐀 😾🔪\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨",
				attachment: fs.createReadStream(__dirname + `/uzair/nikal.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😾", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
