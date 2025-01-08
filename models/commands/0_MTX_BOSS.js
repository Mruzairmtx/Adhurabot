const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
    name: "boss",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "no prefix",
    usePrefix: false,
    commandCategory: "No command marks needed",
    usages: "Yo Yo",
    cooldowns: 5,
};

const gif = "https://i.imgur.com/CF7Ai3j.mp4";
const message = "◈ ━ 💚✨ 𝐇𝐄𝐋𝐋𝐎 𝐁𝐀𝐁𝐘 ◈ ━ 💚✨\n\n° تــؔم کـؔیا سمجــؔھــؔو گـؔے مجـؔھـے \n\n, مــؔیں خــؔـود کــؔـی سمــؔجھ ســؔے بـؔا ہــؔر ہـؔوں :)))🧸💜🍷\n\n💚  ━━━━━ 💚 ━━━━━  💚\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n» 𝙾𝚆𝙽𝙴𝚁 𝙾𝙵 : 𝙼𝚛𝚄𝚣𝚊𝚒𝚛𝚇𝚡𝚇-𝙼𝚃𝚇 💚✨\n◈━━━━━━━━━━━━━━━━💚✨\n\n⩙ 𝙰𝙶𝙴 : 23\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n⩸ 𝙶𝙴𝙽𝙳𝙴𝚁 : 𝙼𝙰𝙻𝙴\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n❂ 𝙰𝙳𝙼𝙸𝙽 𝚄𝙸𝙳 : 61552682190483\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n♛ 𝙰𝙳𝙼𝙸𝙽 𝙵𝙱 𝙻𝙸𝙽𝙺 : https://www.facebook.com/profile.php?id=100086716792385\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n♛ 𝙰𝙳𝙼𝙸𝙽 𝙵𝙱 𝙻𝙸𝙽𝙺 : https://www.facebook.com/profile.php?id=100047059713717\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n♛ 𝙰𝙳𝙼𝙸𝙽 𝙵𝙱 𝙻𝙸𝙽𝙺 : https://www.facebook.com/profile.php?id=100010054632516\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n➻  ──── 𝙾𝚆𝙽𝙴𝚁 𝙵𝙱 𝙻𝙸𝙽𝙺 : https://www.facebook.com/Mtxuzair 😎🔥\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨";

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
    var { threadID, messageID } = event;
    const lowerCaseMessage = event.body.toLowerCase();

    if (lowerCaseMessage.startsWith("Owner") || 
        lowerCaseMessage.startsWith("owner") || 
        lowerCaseMessage.startsWith("Creator") || 
        lowerCaseMessage.startsWith("OWNER")) { 

        const downloadPath = path.join(__dirname, 'Boss-Jpg-Images.jpg');

        // Download image from Imgur
        request(gif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
            var msg = {
                body: message,
                attachment: fs.createReadStream(downloadPath)
            };
            api.sendMessage(msg, threadID, messageID);
            api.setMessageReaction("😘", event.messageID, (err) => {}, true);
        });
    }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
