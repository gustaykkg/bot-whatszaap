//importação bibiotecas
const venom = require('venom-bot');
const fs = require("fs"); 

venom.create().then((client) => start(client))
.catch((erro) => {
    console.log(erro);
  });

//iniciando bot
function start(client) {

    module.exports={client}
    
    const comandos = fs.readdirSync(`./comandos`).filter(file => file.endsWith(`.js`));
    comandos.forEach(comandos => {
    require(`${__dirname}/comandos/${comandos}`);})
}

