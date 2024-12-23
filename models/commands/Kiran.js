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
	if(react.includes("owner") ||
     react.includes("shan") || react.includes("shaan") || react.includes("Shan") ||
react.includes("Shaan") ||
react.includes("admin")) {
		var msg = {
				body: `★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★
               ✦Kìrâñ RajPööt ☠️🏴‍☠️✦

☞𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞:
https://www.facebook.com/Kìrâñ RajPööt uid👉✨100086716792385✨



★★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 :  ✦𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿✦`,attachment: fs.createReadStream(__dirname + `/uzair/.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤎", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
