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

const gif = "https://vt.tiktok.com/ZS6mRALA7/";
const message = "◈💚✨ 𝐇𝐄𝐋𝐋𝐎 𝐁𝐀𝐁𝐘 ◈💚✨\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n° تــؔم کـؔیا سمجــؔھــؔو گـؔے مجـؔھـے \n\n, مــؔیں خــؔـود کــؔـی سمــؔجھ ســؔے بـؔا ہــؔر ہـؔوں :)))🧸💜🍷\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n< 𝙽𝙰𝙼𝙴 > : 𝙼𝚄𝙷𝙰𝙼𝙼𝙰𝙳 𝚄𝚉𝙰𝙸𝚁 𝚁𝙰𝙹𝙿𝚄𝚃 😇✨\n\n💚  ━━━━━ 💚 ━━━━━  💚\n\n< 𝚁𝙴𝙻𝙸𝙶𝙸𝙾𝙽 > : 𝙸𝚂𝙻𝙰𝙼\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝚁𝙴𝙻𝙰𝚂𝙷𝙸𝙾𝙽 𝚂𝙷𝙸𝙿 : 𝚂𝙴𝙲𝚁𝙰𝚃𝙴 𝙷𝙰𝙸 𝙱𝙾𝚂𝚂... 𝙽𝙰𝙼𝙴 𝙻𝙸𝚈𝙰 𝚃𝚆 𝙱𝙰𝙳𝙽𝙰𝙼𝙴 𝙷𝙾 𝙹𝚈𝙶𝙸 𝙾𝚁 𝙼𝙴 𝙰𝙿𝙽𝙸 𝙼𝙾𝙷𝙰𝙱𝙱𝙰𝚃 𝙺𝙾 𝙱𝙰𝙳𝙽𝙰𝙼𝙴 𝙽𝙷𝙸 𝙺𝙰𝚁 𝚂𝙰𝙺𝚃𝙰..😎🤞\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n» 𝙾𝚆𝙽𝙴𝚁 𝙾𝙵 : 𝙼𝚛𝚄𝚣𝚊𝚒𝚛𝚇𝚡𝚇-𝙼𝚃𝚇 💚✨\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n⩙ 𝙰𝙶𝙴 : 23\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n⩸ 𝙶𝙴𝙽𝙳𝙴𝚁 : 𝙼𝙰𝙻𝙴\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n❂ 𝙰𝙳𝙼𝙸𝙽 𝚄𝙸𝙳 : 61552682190483\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n♛ 𝙰𝙳𝙼𝙸𝙽 𝙵𝙱 𝙻𝙸𝙽𝙺 : https://www.facebook.com/profile.php?id=100086716792385\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n♛ 𝙰𝙳𝙼𝙸𝙽 𝙵𝙱 𝙻𝙸𝙽𝙺 : https://www.facebook.com/profile.php?id=100047059713717\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n♛ 𝙰𝙳𝙼𝙸𝙽 𝙵𝙱 𝙻𝙸𝙽𝙺 : https://www.facebook.com/profile.php?id=100010054632516\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n➻  ──── 𝙾𝚆𝙽𝙴𝚁 𝙵𝙱 𝙻𝙸𝙽𝙺 : https://www.facebook.com/Mtxuzair 😎🔥\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝑨𝑫𝑬 𝑩𝒀\n\n◈━━━━━━━━━━━━━━━━💚✨\n\n𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 ◈ ──── 💚✨";

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
    var { threadID, messageID } = event;
    const lowerCaseMessage = event.body.toLowerCase();

    if (lowerCaseMessage.startsWith("Owner") || 
        lowerCaseMessage.startsWith("owner") || 
        lowerCaseMessage.startsWith("Creator") || 
        lowerCaseMessage.startsWith("OWNER")) { 

        const downloadPath = path.join(__dirname, 'Boss-mp4-Images.mp4');

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
