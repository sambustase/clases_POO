import Cliente from "./cliente";
import Impuestos from "./impuestos";

let impuestoC1 = new Impuestos (5000, 500);
let c1 = new Cliente("Roberto", impuestoC1);
const impuestosAPagar = c1.calcularImpuestos();
console.log( `El cliente ${c1.nombre} debe pagar un impuesto total de ${impuestosAPagar}` );