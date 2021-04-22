const Tarea = require("./tarea");
const fs = require('fs');
const { green, red } = require('colors');
const RUTA = './database/bd.json'
const { borrarTarea } = require('../helpers/inquirer')

class Tareas {
    lista_tareas = {}
    constructor() {
        if (!fs.existsSync(RUTA)) return null;
        this.lista_tareas = JSON.parse(fs.readFileSync(RUTA))
    }

    almacenarEnBD() {
        fs.writeFileSync(RUTA, JSON.stringify(this.lista_tareas))
    }

    crearTarea(descripcion = '') {
        const tarea = new Tarea(descripcion);
        const { id, desc, fechaTerminado, terminado } = tarea;
        this.lista_tareas[id] = { id, desc, fechaTerminado, terminado };
    }

    get mostrarTareas() {
        let i = 1;
        console.log()
        for (const tarea in this.lista_tareas) {
            const terminado = this.lista_tareas[tarea].terminado;
            const descripcion = this.lista_tareas[tarea].desc;

            if (terminado) {
                console.log(`${green(i)}. ${descripcion} : ${green('terminada')}`)
            } else {
                console.log(`${green(i)}. ${descripcion} : ${red('pendiente')}`)
            }
            i++;
        }
    }

    mostrarTareasCompletasPendientes = (completadas = true) => {
        console.log()

        for (const tarea in this.lista_tareas) {
            const terminado = this.lista_tareas[tarea].terminado;
            const descripcion = this.lista_tareas[tarea].desc;
            const fecha = this.lista_tareas[tarea].fechaTerminado;

            if (completadas && terminado) { console.log(`${green('~>')} ${descripcion} : ${green(fecha)}`) }
            if (!completadas && !terminado) { console.log(`${red('~>')} ${descripcion} : ${red('pendiente')}`) }

        }
    }

    eliminarTarea() {
        const borrar = async () => {
            const id = await borrarTarea(this.lista_tareas);
            return id
        }
        return borrar()
    }

    completarTareas = (id_tareas = []) => {
        const hoy = new Date()
        // console.log( id_tareas )
        // console.log( this.lista_tareas )
        // console.log( '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~' )
        id_tareas.forEach(id => {
            // console.log( this.lista_tareas[id] )
            if (!this.lista_tareas[id].fechaTerminado) {
                this.lista_tareas[id].fechaTerminado = hoy.toISOString();
                this.lista_tareas[id].terminado = !this.lista_tareas[id].terminado
            }
        });

        Object.keys( this.lista_tareas ).forEach( id_item => {  
            if(!id_tareas.includes(  id_item )  ){
                this.lista_tareas[id_item].fechaTerminado = null;
                this.lista_tareas[id_item].terminado = false;
            }
        } )
        
    }
}

module.exports = Tareas;