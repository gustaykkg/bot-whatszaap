const {client} = require('../index')
const config = require('../config')

module.exports= { contato }

function contato(msg){
    client.sendText(msg.from,
    `   ═══════════════
    |        🌐 CONTATO 🌐 
    |                    
    |>-   Instagram: *monti_selli*
    |
    |>-   Facebook: *gustavo monti selli*  
    |                     
    |>-   Twitter: *guxtakkk*
    |
    ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼❥`)
}