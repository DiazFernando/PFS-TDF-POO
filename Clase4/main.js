"use strict";
exports.__esModule = true;
var auto_1 = require("./auto");
var registroAutomotor_1 = require("./registroAutomotor");
//Intancio los objetos Auto
var auto1 = new auto_1.Auto("Volkswagen", "Gol", "AA111AA", 2020);
var auto2 = new auto_1.Auto("Fiat", "Cronos", "BB222BB", 2022);
var auto3 = new auto_1.Auto("Chevrolet", "ASTRA", "CC333CC", 2019);
//Creo la lista (Array) de autos
var listaDeAutos = [auto1, auto2, auto3];
//Instancio mi objeto RegistroAutomotor
var registroAutomotorAustral = new registroAutomotor_1.RegistroAutomotor(listaDeAutos);
//Obtengo la lista completa
registroAutomotorAustral.mostrarListaCompleta();
//Instancio un nuevo auto para registrarlo
var auto4 = new auto_1.Auto("Peugeot", "206", "AA555BB", 2018);
//Registro el nuevo auto
registroAutomotorAustral.registrarAuto(auto4);
console.log("--------------------------------------------------------");
//Vuelvo a mostrar la lista completa para comprobar el nuevo registro
registroAutomotorAustral.mostrarListaCompleta();
//Se consulta si el auto esta en la lista
console.log(registroAutomotorAustral.consultarAuto(auto1));
console.log("--------------------------------------------------------");
//En el siguiente caso se modifica la patente del auto
registroAutomotorAustral.modificarAuto(auto1, "CC888CC", "Volkswagen", 2020, "Gol");
console.log(registroAutomotorAustral.consultarAuto(auto1));
console.log("--------------------------------------------------------");
//Instancio otro auto para consulta si esta en la lista
var auto5 = new auto_1.Auto("Peugeot", "207", "AA666BB", 2020);
//Consulto si esta en la lista deberia salir que no esta registrado
console.log(registroAutomotorAustral.consultarAuto(auto5));
console.log("--------------------------------------------------------");
//Elimino un auto de la lista
registroAutomotorAustral.eliminarAuto(auto2);
//Muestro la lista completa para comprobar que se elmimino el auto
registroAutomotorAustral.mostrarListaCompleta();
