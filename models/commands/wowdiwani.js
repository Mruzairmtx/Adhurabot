const fs = require("fs");
module.exports.config = {
	name: "wow",
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
	if (event.body.indexOf("Diwani")==0 || (event.body.indexOf("diwani")==0)) {
		var msg = {
				body: "𝑰𝒎 𝑯𝒆𝒓𝒆 😋\n\n◈ ──────────────── 💚✨\n\n𝗖𝗿𝗲𝗱𝗶𝘁𝗲 :- 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿",
				attachment: fs.createReadStream(__dirname + `/uzair/diwani.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
