
require('colors');
// const util = require('util');

const mostrarMenu = () => {
    return new Promise( (res, rej) => {

        // console.clear();

        console.log('~~~~~~~~~~~~~~~~~~~~~~'.cyan.bold)
        console.log('Seleccione una opcion'.bold)
        console.log('~~~~~~~~~~~~~~~~~~~~~~\n'.cyan.bold)

        console.log(`${'1.-'.cyan} Crear tarea`)
        console.log(`${'2.-'.cyan} Listar tarea`)
        console.log(`${'3.-'.cyan} Listar tareas completadas`)
        console.log(`${'4.-'.cyan} Listar tareas pendientes`)
        console.log(`${'5.-'.cyan} Completar tarea(s)`)
        console.log(`${'6.-'.cyan} Borrar tarea(s)`)
        console.log(`${'0.-'.cyan} Salir \n`)


        const rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Seleccione una opcion \n', (opt) => {
            rl.close();

            res(opt)
        })

    })
}

const pausa = () => {
    return new Promise(  (resolve,reject)=>{

        const rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        rl.question(`Presione ${'Enter'.cyan.bold} para continuar`, (opt) => {
            rl.close()
            resolve();
        })
    })

}

module.exports = {
    mostrarMenu,
    pausa
}
