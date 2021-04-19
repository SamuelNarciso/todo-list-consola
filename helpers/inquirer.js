const inquirer = require('inquirer');
require('colors');
const questionsArray = [
    {   type: 'list',
        name: 'opc',
        message: 'Que quieres hacer?',
        choices: [
            {value:'1', name:'Crear tarea'                },
            {value:'2', name:'Listar tarea'               },
            {value:'3', name:'Listar tareas completadas'  },
            {value:'4', name:'Listar tareas pendientes'   },
            {value:'5', name:'Completar tarea(s)'         },
            {value:'6', name:'Borrar tarea(s)'            },
            {value:'0', name:'Salir'                      },
        ],
    }
]

const pauseArray = [{
    type: 'input',
    name: 'pause',
    message: `Presiona ${('ENTER').cyan } para continuar.`
}]

const inquirerMenu = async () => {
    console.clear()
    console.log('~~~~~~~~~~~~~~~~~~~~~~'.cyan.bold)
    console.log('Seleccione una opcion'.bold)
    console.log('~~~~~~~~~~~~~~~~~~~~~~\n'.cyan.bold)

    const {opc} = await inquirer.prompt(questionsArray)   
    return opc;

}
const pause = async ( )=>{
    const {pause} = await inquirer.prompt(pauseArray);
    return pause;
}


module.exports = { inquirerMenu, pause }