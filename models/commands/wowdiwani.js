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
				body: "I'm here 😋",
				attachment: fs.createReadStream(__dirname + `/uzair/diwani.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }