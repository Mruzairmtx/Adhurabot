const fs = require("fs");
module.exports.config = {
	name: "bhag",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "nasta",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bhag")==0 || event.body.indexOf("bhag")==0 || event.body.indexOf("Bhag Ja")==0 || event.body.indexOf("bhag Ja")==0) {
		var msg = {
				body: "𝐓𝐔 𝐊𝐇𝐔𝐃 𝐉𝐀 🔪😾\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨", attachment: fs.createReadStream(__dirname + `/uzair/bhag.png`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
