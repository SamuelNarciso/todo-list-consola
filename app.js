const colors = require('colors');
const { inquirerMenu, pause, inquirerPregunta } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async () => {
    console.clear()
    let opt = '0'

    const tareas = new Tareas();

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case '1': //'Crear tarea'                
                desc = await inquirerPregunta('Descripcion de la tarea: ')
                tareas.crearTarea(desc)
                //  console.log( desc )

                break;
            case '2': //'Listar tarea'               
                console.log( tareas.mostrarTareas )

                break;
            case '3': //'Listar tareas completadas'  
                break;
            case '4': //'Listar tareas pendientes'   

                break;
            case '5': //'Completar tarea(s)'         

                break;
            case '6': //'Borrar tarea(s)'            

                break;

            default:
                break;
        }

        // console.log({ opt })
        await pause()
    } while (opt !== '0')

}
main();