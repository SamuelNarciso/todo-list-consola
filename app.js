const colors = require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');
const main = async () => {
    console.clear()
    let opt = ''
    do {
        opt = await mostrarMenu()
        await pausa();
    } while (opt !== '0')

}
main();