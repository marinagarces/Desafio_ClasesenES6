"use strict";

/*require("babel-polyfill");*/

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto1 = new _impuesto["default"](100000, 150);
var impuesto2 = new _impuesto["default"](200000, 250);
var cliente1 = new _cliente["default"]("ClienteUno", impuesto1);
var cliente2 = new _cliente["default"]("ClienteUno", impuesto2);
console.log("Impuesto del Cliente1 ".concat(cliente1.nombre, ": ").concat(cliente1.calcularImpuesto()));
console.log("Impuesto del Cliente2 ".concat(cliente2.nombre, ": ").concat(cliente2.calcularImpuesto()));
