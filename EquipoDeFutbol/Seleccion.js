"use strict";
exports.__esModule = true;
exports.Seleccion = void 0;
var Seleccion = /** @class */ (function () {
    //Constructor
    function Seleccion(nombreDeLaSeleccion) {
        //Atributos
        this.listaDeJugadores = new Array;
        this.listaCuerpoTecnico = new Array;
        this.nombre = nombreDeLaSeleccion;
    }
    //Funcionalidades
    Seleccion.prototype.getNombreDeLaSeleccion = function () {
        return this.nombre;
    };
    Seleccion.prototype.setNombreDeLaSeleccion = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Seleccion.prototype.mostrarSeleccionCompleta = function () {
        return this.listaDeJugadores.toString() + "\n\n" + this.listaCuerpoTecnico.toString();
    };
    Seleccion.prototype.cargarJugador = function (nombreJugador) {
        this.listaDeJugadores.push(nombreJugador);
    };
    Seleccion.prototype.cargarCuerpoTecnico = function (nombreDelCuerpoTecnico) {
        this.listaCuerpoTecnico.push(nombreDelCuerpoTecnico);
    };
    Seleccion.prototype.eliminarJugador = function (nombre, apellido) {
        for (var i = 0; i < this.listaDeJugadores.length; i++) {
            if (this.listaDeJugadores[i].getNombre() === nombre && this.listaDeJugadores[i].getApellido() === apellido) {
                this.listaDeJugadores.splice(i, 1);
            }
        }
    };
    Seleccion.prototype.eliminarCuerpoTecnico = function (nombre, apellido) {
        for (var i = 0; i < this.listaCuerpoTecnico.length; i++) {
            if (this.listaCuerpoTecnico[i].getNombre() === nombre && this.listaCuerpoTecnico[i].getApellido() === apellido) {
                this.listaCuerpoTecnico.splice(i, 1);
            }
        }
    };
    Seleccion.prototype.mostrarJugador = function (nombre, apellido) {
        for (var i = 0; i < this.listaDeJugadores.length; i++) {
            if (this.listaDeJugadores[i].getNombre() === nombre && this.listaDeJugadores[i].getApellido() === apellido) {
                return this.listaDeJugadores[i].toString();
            }
        }
        return nombre + " " + apellido + " no esta en la lista";
    };
    Seleccion.prototype.mostrarListaDeJugadores = function () {
        return this.listaDeJugadores.toString();
    };
    Seleccion.prototype.mostrarListaDeCuerpoTecnico = function () {
        return this.listaCuerpoTecnico.toString();
    };
    Seleccion.prototype.mostrarCuerpoTecnico = function (nombre, apellido) {
        for (var i = 0; i < this.listaCuerpoTecnico.length; i++) {
            if (this.listaCuerpoTecnico[i].getNombre() === nombre && this.listaCuerpoTecnico[i].getApellido() === apellido) {
                return this.listaCuerpoTecnico[i].toString();
            }
        }
        return nombre + " " + apellido + " no esta en la lista";
    };
    return Seleccion;
}());
exports.Seleccion = Seleccion;
