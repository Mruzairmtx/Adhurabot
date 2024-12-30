const API = "https://api.botcahx.biz.id/api/textpro/chocolate-cake?TioXd&apikey=d9e9eb44&text="
module.exports.config = {
	name: "chocolate",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "uzairrajput",
	description: " logo",
	commandCategory: "text maker",
	usages: "thunder<text>",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    anup = args.join(" ");
    (event.type == "message_reply") ? anup = event.messageReply.attachments[0].url: anup = args.join(" ");
    const pathsave = __dirname + `/uzair/banner2.png`;
    let imageBuffer;
    api.sendMessage("✨ 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓 𝐌𝐘 𝐋𝐎𝐕𝐄 ✨🧡 ", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(anup)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: `🤍🍒 𝐘𝐄 𝐋𝐎.𝐌𝐄𝐑𝐈 𝐉𝐀𝐍 ✨🧡\n\nCoded By:\n               ✯ 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨ ✯`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`An error has occurred ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};
