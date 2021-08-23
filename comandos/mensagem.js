const index = require('../index')
const config = require('../config')

index.client.onMessage( async (msg) =>{
    if(msg?.body?.startsWith(config.prefix)) {
    console.log('Comando: ', msg.body)
      let comando =  msg.body.toLowerCase().split(" ")[0].substr(config.prefix.length)
        
            switch(comando){
                case "say":
                    let say = require("./say");
                    say.say(msg);
                    break;
                case "help":
                    let help = require("./help");
                    help.help(msg);
                    break;
                case "info":
                    let info = require("./info")
                    info.info(msg)
                    break;
                case "contato":
                    let contato = require("./contato")
                    contato.contato(msg)
                    break; 
               case "ban":
                    let ban = require("./ban")
                    ban.ban(msg)
                    break;      
                default: console.log('Comando inexistente')         
            }
    }
})
