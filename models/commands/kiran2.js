const fs = require("fs");
module.exports.config = {
	name: "onfire",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "uzairrajput", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("@Kìrâñ RajPööt ") ||
     react.includes("kiran") || react.includes("KIRAN") || react.includes("@乛 Kɪɽʌƞ'Ꮗːャ ") ||
react.includes("@Ønfīīre Kīīran ") ||
react.includes("kiran")) {
		var msg = {
				body: `Ønfīīre Kīīran ☠️🏴‍☠️`,attachment: fs.createReadStream(__dirname + `/uzair/0.1.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤎", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
