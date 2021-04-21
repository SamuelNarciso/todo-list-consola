const Tarea = require("./tarea");

class Tareas {
    lista_tareas = {}
    constructor() {
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this.lista_tareas[tarea.id] = tarea;
    }


    get mostrarTareas() {
        const lista = []

        for (const tarea in this.lista_tareas) {
            lista.push( this.lista_tareas[tarea] )            
        }

        return lista;
    }

    eliminarTarea(id){
        this.lista_tareas = this.lista_tareas.filter( tarea => tarea.id != id )
    }


}

module.exports = Tareas;