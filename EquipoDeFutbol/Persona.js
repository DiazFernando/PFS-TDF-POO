"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    //Constructor
    function Persona(nombre, apellido, numPasaporte, fechaDeNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numDePasaporte = numPasaporte;
        this.fechaDeNacimiento = fechaDeNacimiento;
    }
    //Funcionalidades
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getNumeroDePasaporte = function () {
        return this.numDePasaporte;
    };
    Persona.prototype.getFechaDeNacimiento = function () {
        return this.fechaDeNacimiento;
    };
    Persona.prototype.toString = function () {
        return this.getNombre() + "\n" + this.getApellido() + "\n" + this.getFechaDeNacimiento() + "\n" + String(this.getNumeroDePasaporte());
    };
    return Persona;
}());
exports.Persona = Persona;
