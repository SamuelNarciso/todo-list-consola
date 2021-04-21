const inquirer = require('inquirer');
require('colors');
const questionsArray = [
    {   type: 'list',
        name: 'opc',
        message: 'Que quieres hacer?',
        choices: [
            {value:'1', name:`${'1.-'.cyan} Crear tarea`                },
            {value:'2', name:`${'2.-'.cyan} Listar tarea`               },
            {value:'3', name:`${'3.-'.cyan} Listar tareas completadas`  },
            {value:'4', name:`${'4.-'.cyan} Listar tareas pendientes`   },
            {value:'5', name:`${'5.-'.cyan} Completar tarea${'(s)'.grey}'`},
            {value:'6', name:`${'6.-'.cyan} Borrar tarea${'(s)'.grey}'`},
            {value:'0', name:`${'0.-'.cyan} Salir`                      },
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

const inquirerPregunta = async ( pregunta )=>{
    const preguntaArray = [{
        type: 'input',
        name: 'respuesta',
        message: pregunta,
        validate: ( input )=>{
            if(input.length === 0) return 'Por favor, ingresa una descripcion';
            return true;
        }
    }]

    const {respuesta} = await inquirer.prompt(preguntaArray)
    return respuesta;
}

const pause = async ( )=>{
    const {pause} = await inquirer.prompt(pauseArray);
    return pause;
}


module.exports = { inquirerMenu, pause, inquirerPregunta }