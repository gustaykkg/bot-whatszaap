const {client} = require('../index')
const config = require('../config')

module.exports= { info }

function info(msg){
    client.sendText(msg.from,
    `  ═══════════════
    |              ❓ INFO ❓
    |                    
    |>-    Bot criado sem intuido algum,
    |      apenas para testes e diversão
    |
    |>-    Criado por *gustavo monti selli*   
    |                     
    |>-    Informações de contato em
    |      *!contato*
    |
    ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼❥`)
}