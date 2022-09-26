"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    //constructor
    function Libro(nombreDelLibro, generoDelLibro, editorialDelLibro, autorDelLibro) {
        this.nombre = nombreDelLibro;
        this.genero = generoDelLibro;
        this.editorial = editorialDelLibro;
        this.autor = autorDelLibro;
    }
    //Funcionalidades
    Libro.prototype.getNombreDelLibro = function () {
        return this.nombre;
    };
    Libro.prototype.getGeneroDelLibro = function () {
        return this.genero;
    };
    Libro.prototype.getEditorialDelLibro = function () {
        return this.editorial;
    };
    Libro.prototype.getAutorDelLibro = function () {
        return this.autor;
    };
    return Libro;
}());
exports.Libro = Libro;
