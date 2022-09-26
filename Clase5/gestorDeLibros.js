"use strict";
exports.__esModule = true;
exports.GestorDeLibros = void 0;
var GestorDeLibros = /** @class */ (function () {
    //constructor
    function GestorDeLibros(listaDeLibros) {
        this.baseDeDatosDeLibros = listaDeLibros;
    }
    //Funcionalidades
    GestorDeLibros.prototype.mostrarBaseDeDatos = function () {
        this.baseDeDatosDeLibros.forEach(function (object) {
            console.log(object);
        });
    };
    GestorDeLibros.prototype.insertarLibro = function (libroAIngresar) {
        this.baseDeDatosDeLibros.push(libroAIngresar);
    };
    GestorDeLibros.prototype.ConsultarPorElLibro = function (libroAConsultar) {
        var respuesta = false;
        for (var i = 0; i < this.baseDeDatosDeLibros.length; i++) {
            if (this.baseDeDatosDeLibros[i].getNombreDelLibro() === libroAConsultar.getNombreDelLibro()) {
                respuesta = true;
            }
        }
        return respuesta;
    };
    return GestorDeLibros;
}());
exports.GestorDeLibros = GestorDeLibros;
