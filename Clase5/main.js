"use strict";
exports.__esModule = true;
var libro_1 = require("./libro");
var gestorDeLibros_1 = require("./gestorDeLibros");
//Instancio los libros
var libro1 = new libro_1.Libro("Rayuela", "Novela, Ficción", "Sudamericana", "Julio Cortázar");
var libro2 = new libro_1.Libro("It", "Novela, Terror, Fantasía oscura, Coming-of-age", "Signet books", "Stephen King");
//Creo el arreglo de libros
var baseDeDatosDeLibros = [libro1, libro2];
//Instancio el Gestor de libros
var libreriaUshuaia = new gestorDeLibros_1.GestorDeLibros(baseDeDatosDeLibros);
//Consulto la base de datos completa de la libreria
libreriaUshuaia.mostrarBaseDeDatos();
console.log("-----------------------------------------------------");
//Instancio otro libro y luego lo ingreso a la base de datos
var libro3 = new libro_1.Libro("El último confín de la Tierra", "Biografía", "Hodder & Stoughton", "Esteban Lucas Bridges");
libreriaUshuaia.insertarLibro(libro3);
//consulto si el libro ingresado se encuentra en la base de datos
console.log(libreriaUshuaia.ConsultarPorElLibro(libro3));
console.log("-----------------------------------------------------");
//Por ultimo muestro la base de datos completa nuevamente
libreriaUshuaia.mostrarBaseDeDatos();
