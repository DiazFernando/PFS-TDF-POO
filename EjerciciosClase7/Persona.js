"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, numDni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = numDni;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Persona.prototype.setApellido = function (nuevoApellido) {
        this.apellido = nuevoApellido;
    };
    Persona.prototype.setDni = function (nuevoDni) {
        this.dni = nuevoDni;
    };
    return Persona;
}());
exports.Persona = Persona;
