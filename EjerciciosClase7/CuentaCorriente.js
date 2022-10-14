"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CuentaCorriente = void 0;
var Cuenta_1 = require("./Cuenta");
var CuentaCorriente = /** @class */ (function (_super) {
    __extends(CuentaCorriente, _super);
    function CuentaCorriente(numDeCuenta, saldoActual, nombreCliente, apellidoCliente, dniCliente) {
        var _this = _super.call(this, numDeCuenta, saldoActual, nombreCliente, apellidoCliente, dniCliente) || this;
        _this.interesFijo = 1.015;
        return _this;
    }
    CuentaCorriente.prototype.toString = function () {
        return "Nombre Del Cliente: " + this.getNombre() + "\n" + "Apellido Del Cliente: " + this.getApellido() + "\n" + "DNI Del Cliente: " + String(this.getDni()) + "\n" + "Saldo Actual: " + this.getSaldo();
    };
    CuentaCorriente.prototype.actualizarSaldo = function () {
        this.saldo = this.saldo * this.interesFijo;
    };
    CuentaCorriente.prototype.retirar = function (montoAretirar) {
        this.saldo = this.saldo - montoAretirar;
    };
    return CuentaCorriente;
}(Cuenta_1.Cuenta));
exports.CuentaCorriente = CuentaCorriente;
