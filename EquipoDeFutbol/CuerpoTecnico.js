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
exports.CuerpoTecnico = void 0;
var Persona_1 = require("./Persona");
var CuerpoTecnico = /** @class */ (function (_super) {
    __extends(CuerpoTecnico, _super);
    //Constructor
    function CuerpoTecnico(nombre, apellido, numPasaporte, fechaDeNacimiento, cargo) {
        var _this = _super.call(this, nombre, apellido, numPasaporte, fechaDeNacimiento) || this;
        _this.cargo = cargo;
        return _this;
    }
    //Funcionalidades
    CuerpoTecnico.prototype.getCargo = function () {
        return this.cargo;
    };
    CuerpoTecnico.prototype.setCargo = function (nuevoCargo) {
        this.cargo = nuevoCargo;
    };
    CuerpoTecnico.prototype.toString = function () {
        return "\n" + "NOMBRE: " + this.getNombre() + "\n" + "APELLIDO: " + this.getApellido() + "\n" + "FECHA DE NACIMIENTO: " + this.getFechaDeNacimiento() + "\n" + "NUMERO DE PASAPORTE: " + String(this.getNumeroDePasaporte()) + "\n" + "CARGO: " + this.getCargo() + "\n";
    };
    return CuerpoTecnico;
}(Persona_1.Persona));
exports.CuerpoTecnico = CuerpoTecnico;
