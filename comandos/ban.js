const {client } = require('../index')

module.exports={ ban }

async function ban(msg){
    if(msg.mentionedJidList == undefined)client.log(true);
    else console.log(false);
    await client.removeParticipant(msg.chatId, msg.mentionedJidList[0]);
}
