import Impuesto from './impuesto.js';

class Cliente {
    constructor(nombre, impuesto) {
      this._nombre = nombre;
      this._impuesto = impuesto;
    }

    get nombre() {
      return this._nombre;
    }

    set nombre(nombre) {
      this._nombre = nombre;
    }

    calcularImpuesto() {
      const porciento = 21 / 100;
      return (
        (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * porciento
      );
    }
}

export default Cliente;
