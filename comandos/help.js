const { client } = require('../index')

module.exports = { help }

async function help(msg){
     client.sendText(msg.from,`Olá, ${msg.sender.pushname}\n
    ═════════════════
__|         ☾ 🤖 naomi bot ☽ 
|
|             📣 SUPORTE 📣
|
|-      !info → Informações do bot.
|
|-      !contato → Exibe dados para
|       contato.
|
|-      !guia → Mostra todos os comando
|       existentes.
|
╰╼❥ naomi® by gustavo`).catch((erro) => {
    console.error('Error when sending: ', erro);
  })
}