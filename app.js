const colors = require('colors');
const { inquirerMenu, 
        pause, 
        inquirerPregunta, 
        confirmar, 
        marcarTareasCompletadas } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');

const main = async () => {
    // console.clear()
    let opt = '0'

    const tareas = new Tareas();

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case '1': //'Crear tarea'                
                desc = await inquirerPregunta('Descripcion de la tarea: ')
                tareas.crearTarea(desc)
                break;

            case '2': //'Listar tarea'               
                tareas.mostrarTareas
                break;

            case '3': //'Listar tareas completadas'  
                tareas.mostrarTareasCompletasPendientes(true)
                break;

            case '4': //'Listar tareas pendientes'   
                tareas.mostrarTareasCompletasPendientes(false)
                break;

            case '5': //'Completar tarea(s)'         
                const lista_marcadas = await marcarTareasCompletadas( tareas.lista_tareas )
                // console.log( lista_marcadas )
                tareas.completarTareas( lista_marcadas )
                break;

            case '6': //'Borrar tarea(s)'            
                id = await tareas.eliminarTarea()
                if (id !== '0') {
                    confirmacion = await confirmar();
                    if (confirmacion) {
                        delete tareas.lista_tareas[id]
                    }
                }
                break;

        }

        tareas.almacenarEnBD()
        console.log('\n')
        await pause()
    } while (opt !== '0')

}
main();