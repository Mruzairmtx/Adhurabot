const fs = require("fs");
module.exports.config = {
        name: "break-fast",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "uzairrajput",
        description: "THIS BOT WAS MADE BY UZAIR RAJPUT MTX",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("Breakfast") ||
     react.includes("breakfast") || react.includes("BREAKFAST") || react.includes("bf") ||
react.includes("BF") ||
react.includes("Bf")) {
                var msg = {
                                body: `𝐋𝐨 𝐁𝐚𝐁𝐲\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨`,attachment: fs.createReadStream(__dirname + `/uzair/bf.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥐", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
