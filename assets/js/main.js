import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

let impuesto1 = new Impuesto(19, 150);
let impuesto2 = new Impuesto(19, 150);
console.log(
  `EL Monto Bruto Anual es: ${impuesto._monto_bruto_anual}, Las Deducciones son: ${impuesto._deducciones}`
);

let c1 = new Cliente("ClienteUno", impuesto1);
let c2 = new Cliente("ClienteUno", impuesto2);
console.log(`Impuesto de ${c1.nombre}: ${c1.calcularImpuesto()}`);
console.log(`Impuesto de ${c2.nombre}: ${c2.calcularImpuesto()}`);
