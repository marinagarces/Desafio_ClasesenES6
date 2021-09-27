import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

let impuesto1 = new Impuesto(100000, 150);
let impuesto2 = new Impuesto(200000, 250);
console.log(`EL Monto Bruto Anual es: ${impuesto1._monto_bruto_anual}, Las Deducciones son: ${impuesto1._deducciones}`);
console.log(`EL Monto Bruto Anual es: ${impuesto2._monto_bruto_anual}, Las Deducciones son: ${impuesto2._deducciones}`);
let cliente1 = new Cliente("ClienteUno", impuesto1);
let cliente2 = new Cliente("ClienteUno", impuesto2);
console.log(`Impuesto de ${cliente1.nombre}: ${cliente1.calcularImpuesto()}`);
console.log(`Impuesto de ${cliente2.nombre}: ${cliente2.calcularImpuesto()}`);
