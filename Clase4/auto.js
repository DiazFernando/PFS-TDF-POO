"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    // Constructor
    function Auto(marcaAuto, modeloAuto, patenteAuto, anioAuto) {
        this.marca = marcaAuto;
        this.modelo = modeloAuto;
        this.patente = patenteAuto;
        this.anio = anioAuto;
    }
    // Funcionalidades
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (nuevaMarca) {
        this.marca = nuevaMarca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setModelo = function (nuevoModelo) {
        this.modelo = nuevoModelo;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setPatente = function (nuevaPatente) {
        this.patente = nuevaPatente;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    Auto.prototype.setAnio = function (nuevoAnio) {
        this.anio = nuevoAnio;
    };
    Auto.prototype.tostring = function () {
        return this.getMarca() + " - " + this.getModelo() + " - " + this.getPatente() + " - " + this.getAnio();
    };
    return Auto;
}());
exports.Auto = Auto;
