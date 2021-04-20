import { v4 as uuid } from 'uuid';

class Tarea {
    constructor(desc) {
        this.id = uuid();
        this.desc = desc;
        this.fechaTerminado = null;
        this.terminado = false;
    }

    mostrarTarea() {
        console.log(
            id,
            desc,
            fechaTerminado,
            terminado
        )
    }
}
module.exports = Tarea;