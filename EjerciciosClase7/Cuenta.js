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
exports.Cuenta = void 0;
var Persona_1 = require("./Persona");
var Cuenta = /** @class */ (function (_super) {
    __extends(Cuenta, _super);
    function Cuenta(numeroDeCuenta, saldoActual, nombreCliente, apellidoCliente, dniCliente) {
        var _this = _super.call(this, nombreCliente, apellidoCliente, dniCliente) || this;
        _this.numCuenta = numeroDeCuenta;
        _this.saldo = saldoActual;
        _this.cliente = new Persona_1.Persona(nombreCliente, apellidoCliente, dniCliente);
        return _this;
    }
    Cuenta.prototype.getNumeroDeCuenta = function () {
        return this.numCuenta;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.getCliente = function () {
        return this.cliente.toString();
    };
    Cuenta.prototype.ingresar = function (plataAIngresar) {
        this.saldo = this.saldo + plataAIngresar;
    };
    return Cuenta;
}(Persona_1.Persona));
exports.Cuenta = Cuenta;
