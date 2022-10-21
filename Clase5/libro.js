"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var fs = require("fs");
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
    Libro.prototype.manipularArchivo = function (nombre, texto) {
        fs.writeFile(nombre, texto, function (error) {
            if (error)
                console.log("ERROR");
            else
                console.log("Se creo el archivo");
        });
    };
    Libro.prototype.crearArchivo = function (nombre, texto) {
        this.manipularArchivo(nombre, texto);
    };
    Libro.prototype.modificarArchivo = function (nombre, texto) {
        this.manipularArchivo(nombre, texto);
    };
    Libro.prototype.leerArchivo = function (path) {
        fs.readFile(path, function (error, texto) {
            if (error)
                console.log("ERROR");
            else
                console.log(texto.toString());
        });
    };
    return Libro;
}());
exports.Libro = Libro;
