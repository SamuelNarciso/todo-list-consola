const inquirer = require('inquirer');
require('colors');

const inquirerMenu = async () => {
    const questionsArray = [
        {
            type: 'list',
            name: 'opc',
            message: 'Que quieres hacer?',
            choices: [
                { value: '1', name: `${'1.-'.cyan} Crear tareas` },
                { value: '2', name: `${'2.-'.cyan} Listar tareas` },
                { value: '3', name: `${'3.-'.cyan} Listar tareas completadas` },
                { value: '4', name: `${'4.-'.cyan} Listar tareas pendientes` },
                { value: '5', name: `${'5.-'.cyan} Completar tarea` },
                { value: '6', name: `${'6.-'.cyan} Borrar tarea` },
                { value: '0', name: `${'0.-'.cyan} Salir` },
            ],
        }
    ]
    console.clear()
    console.log('~~~~~~~~~~~~~~~~~~~~~~'.cyan.bold)
    console.log('Seleccione una opcion'.bold)
    console.log('~~~~~~~~~~~~~~~~~~~~~~\n'.cyan.bold)

    const { opc } = await inquirer.prompt(questionsArray)
    return opc;

}

const inquirerPregunta = async (pregunta) => {
    const preguntaArray = [{
        type: 'input',
        name: 'respuesta',
        message: pregunta,
        validate: (input) => {
            if (input.length === 0) return 'Por favor, ingresa una descripcion';
            return true;
        }
    }]

    const { respuesta } = await inquirer.prompt(preguntaArray)
    return respuesta;
}

const pause = async () => {
    const pauseArray = [{
        type: 'input',
        name: 'pause',
        message: `Presiona ${('ENTER').cyan} para continuar.`
    }]
    const { pause } = await inquirer.prompt(pauseArray);
    return pause;
}
const confirmar = async () => {
    const confirmArray = [{
        type: 'confirm',
        name: 'confirmacion',
        message: `Seguro que quieres ${'eliminarlo'.red}? .`
    }]
    const { confirmacion } = await inquirer.prompt(confirmArray)

    return confirmacion
}

const borrarTarea = async (tareas = {}) => {
    borrarArray = [{
        type: 'list',
        name: 'tarea_borrar',
        message: `Selecciona la tarea que deseas ${'BORRAR'.red}`,
        choices: Object.values(tareas).map((tarea) => { return { name: tarea.desc, value: tarea.id } })
    }]
    borrarArray[0].choices.unshift({ value: '0', name: `${'CANCELAR'.blue}` })
    const { tarea_borrar } = await inquirer.prompt(borrarArray)

    return tarea_borrar;
}

const marcarTareasCompletadas = async (tareas = {}) => {
    const arrayTareas = [{
        type: 'checkbox',
        name: 'completadas',
        message: 'Marca las tareas completadas',
        choices: Object.values(tareas).map(tarea => { return { name: tarea.desc, value: tarea.id, checked: tarea.terminado } })
    }];

    // arrayTareas[0].choices.push( { name: 'prueba', value: '123', checked: true } )
    const { completadas } = await inquirer.prompt(arrayTareas);

    return completadas
}

module.exports = {
    inquirerMenu,
    pause,
    inquirerPregunta,
    borrarTarea,
    confirmar,
    marcarTareasCompletadas
}
