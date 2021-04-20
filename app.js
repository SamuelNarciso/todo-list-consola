const colors = require('colors');
const { inquirerMenu, pause } = require('./helpers/inquirer')
const Tarea = require ('./models/tarea')
const main = async () => {
    console.clear()
    let opt = '0'
    do {

        const tarea1 = new Tarea('Tarea 1')
        tarea1.mostrarTarea()
        // opt = await inquirerMenu();
        // console.log({ opt })
        // await pause()
    } while (opt !== '0')

}
main();