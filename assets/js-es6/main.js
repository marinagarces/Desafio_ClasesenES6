import "babel-polyfill";
import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

let impuesto1 = new Impuesto(100000, 150);
let impuesto2 = new Impuesto(200000, 250);

let cliente1 = new Cliente("ClienteUno", impuesto1);
let cliente2 = new Cliente("ClienteUno", impuesto2);
console.log(`Impuesto del Cliente1 ${cliente1.nombre}: ${cliente1.calcularImpuesto()}`);
console.log(`Impuesto del Cliente2 ${cliente2.nombre}: ${cliente2.calcularImpuesto()}`);
