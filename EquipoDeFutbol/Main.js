"use strict";
exports.__esModule = true;
var Jugador_1 = require("./Jugador");
var CuerpoTecnico_1 = require("./CuerpoTecnico");
var Seleccion_1 = require("./Seleccion");
// Instancio los Jugadores
var jugador1 = new Jugador_1.Jugador("EMILIANO", "MARTINEZ", 101, "02-09-1992", "GK", 1);
var jugador2 = new Jugador_1.Jugador("CRISTIAN", "ROMERO", 202, "27-04-1998", "DFC", 13);
var jugador3 = new Jugador_1.Jugador("LEANDRO", "PAREDES", 303, "29-06-1994", "MCD", 5);
var jugador4 = new Jugador_1.Jugador("LAUTARO", "MARTINEZ", 404, "22-08-1997", "DC", 22);
var jugador5 = new Jugador_1.Jugador("LIONEL", "MESSI", 505, "24-06-1987", "ED", 10);
//Instancio el Cuerpo Tecnico
var cuerpoTecnico1 = new CuerpoTecnico_1.CuerpoTecnico("LIONEL", "SCALONI", 606, "16-05-1978", "DT");
var cuerpoTecnico2 = new CuerpoTecnico_1.CuerpoTecnico("PABLO", "AIMAR", 707, "03-11-1979", "AYUDANTE DE CAMPO");
var cuerpoTecnico3 = new CuerpoTecnico_1.CuerpoTecnico("LUIS", "MARTIN", 808, "02-02-1969", "PREPARADOR FISICO");
var cuerpoTecnico4 = new CuerpoTecnico_1.CuerpoTecnico("MARTIN", "TOCALLI", 909, "14-09-1973", "ENTRENADOR DE ARQUEROS");
//Instancio la Selección
var seleccion = new Seleccion_1.Seleccion("ARGENTINA");
//Cargo la lista de Jugadores 
seleccion.cargarJugador(jugador1);
seleccion.cargarJugador(jugador2);
seleccion.cargarJugador(jugador3);
seleccion.cargarJugador(jugador4);
seleccion.cargarJugador(jugador5);
//Cargo la lista de Cuerpo Tecnico
seleccion.cargarCuerpoTecnico(cuerpoTecnico1);
seleccion.cargarCuerpoTecnico(cuerpoTecnico2);
seleccion.cargarCuerpoTecnico(cuerpoTecnico3);
seleccion.cargarCuerpoTecnico(cuerpoTecnico4);
//Muestro Un Jugador y uno del Cuerpo Tecnico por consola
console.log(seleccion.mostrarJugador("LIONEL", "MESSI"));
console.log("-------------------------------------------------------------");
console.log(seleccion.mostrarCuerpoTecnico("PABLO", "AIMAR"));
console.log("-------------------------------------------------------------");
//Muestro la lista completa del plantel
console.log(seleccion.mostrarSeleccionCompleta());
console.log("-------------------------------------------------------------");
console.log("-------------------------------------------------------------");
//Elimino a un jugador y un cuerpo tecnico
seleccion.eliminarJugador("EMILIANO", "MARTINEZ");
seleccion.eliminarCuerpoTecnico("PABLO", "AIMAR");
console.log("-------------------------------------------------------------");
//Muestro nuevamente la lista completa del plantel para verificar la eliminacion
console.log(seleccion.mostrarSeleccionCompleta());
