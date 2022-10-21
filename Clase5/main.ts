import { Libro } from "./libro";
import { GestorDeLibros } from "./gestorDeLibros";

//Instancio los libros
 
let libro1:Libro = new Libro("Rayuela","Novela, Ficción","Sudamericana","Julio Cortázar");
let libro2:Libro = new Libro("It","Novela, Terror, Fantasía oscura, Coming-of-age","Signet books","Stephen King");

//Creo el arreglo de libros

let baseDeDatosDeLibros: Libro[] = [libro1,libro2];

//Instancio el Gestor de libros

let libreriaUshuaia:GestorDeLibros = new GestorDeLibros(baseDeDatosDeLibros);

//Consulto la base de datos completa de la libreria

libreriaUshuaia.mostrarBaseDeDatos();

console.log("-----------------------------------------------------");

//Instancio otro libro y luego lo ingreso a la base de datos

let libro3:Libro = new Libro("El último confín de la Tierra","Biografía","Hodder & Stoughton","Esteban Lucas Bridges");

libreriaUshuaia.insertarLibro(libro3);

//consulto si el libro ingresado se encuentra en la base de datos

console.log(libreriaUshuaia.ConsultarPorElLibro(libro3));

console.log("-----------------------------------------------------");

//Por ultimo muestro la base de datos completa nuevamente

libreriaUshuaia.mostrarBaseDeDatos();
let texto:string = "Hola Mundo"
libro1.crearArchivo("ejemplo1.txt",texto);
libro1.leerArchivo("ejemplo1.txt");