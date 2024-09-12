import Impuestos from "./impuestos.js";

class Cliente {
    constructor(nombre, impuestos){
        this._nombre = nombre;
        this._impuestos = impuestos;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre (nuevoNombre){
        this._nombre = nuevoNombre;
    }
    calcularImpuestos(){
        let monto = this._impuestos.montoBrutoAnual;
        let deducciones = this._impuestos.deducciones;
        let impuestos = (((monto- deducciones) * 21)/100);
        return impuestos;
    }

}

export default Cliente;