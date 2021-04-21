const { v4 : uuid } = require('uuid');

class Tarea {
    
    id = '';
    desc = '';
    fechaTerminado = null;
    terminado = false;
    
    constructor(desc) {
        this.id = uuid();
        this.desc = desc;
        this.fechaTerminado = null;
        this.terminado = false;
    }
  
    

}
module.exports = Tarea;