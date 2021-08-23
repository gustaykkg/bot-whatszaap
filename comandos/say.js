const { client } = require('../index')

module.exports={say}

function say(msg){
    client.sendText(msg.from, 'você é gay').then((result) => {
      console.log('Result: ', result); //return object success
    }).catch((erro) => {
      console.error('Error when sending: ', erro); //return object error
    });
}