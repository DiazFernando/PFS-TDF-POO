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
exports.Jugador = void 0;
var Persona_1 = require("./Persona");
var Jugador = /** @class */ (function (_super) {
    __extends(Jugador, _super);
    //Constructor
    function Jugador(nombre, apellido, numPasaporte, fechaDeNacimiento, posicion, numeroDeCamiseta) {
        var _this = _super.call(this, nombre, apellido, numPasaporte, fechaDeNacimiento) || this;
        _this.posicion = posicion;
        _this.numeroDeCamiseta = numeroDeCamiseta;
        return _this;
    }
    //Funcionalidades
    Jugador.prototype.getPosicion = function () {
        return this.posicion;
    };
    Jugador.prototype.setPosicion = function (nuevaPosicion) {
        this.posicion = nuevaPosicion;
    };
    Jugador.prototype.getNumeroDeCamiseta = function () {
        return this.numeroDeCamiseta;
    };
    Jugador.prototype.setNumeroDeCamiseta = function (nuevoNumeroDeCamiseta) {
        this.numeroDeCamiseta = nuevoNumeroDeCamiseta;
    };
    Jugador.prototype.toString = function () {
        return "\n" + "NOMBRE: " + this.getNombre() + "\n" + "APELLIDO: " + this.getApellido() + "\n" + "FECHA DE NACIMIENTO: " + this.getFechaDeNacimiento() + "\n" + "NUMERO DE PASAPORTE: " + String(this.getNumeroDePasaporte()) + "\n" + "POSICION: " + this.getPosicion() + "\n" + "NUMERO DE CAMISETA: " + String(this.getNumeroDeCamiseta()) + "\n";
    };
    return Jugador;
}(Persona_1.Persona));
exports.Jugador = Jugador;
