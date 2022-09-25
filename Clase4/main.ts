import { Auto } from "./auto";
import { RegistroAutomotor } from "./registroAutomotor";
//Intancio los objetos Auto

let auto1:Auto = new Auto ("Volkswagen","Gol","AA111AA",2020);
let auto2:Auto = new Auto ("Fiat","Cronos","BB222BB",2022);
let auto3:Auto = new Auto ("Chevrolet","ASTRA","CC333CC",2019);

//Creo la lista (Array) de autos

let listaDeAutos:Auto[] = [auto1,auto2,auto3];

//Instancio mi objeto RegistroAutomotor

let registroAutomotorAustral:RegistroAutomotor = new RegistroAutomotor(listaDeAutos);

//Obtengo la lista completa

registroAutomotorAustral.mostrarListaCompleta();

//Instancio un nuevo auto para registrarlo

let auto4:Auto = new Auto("Peugeot", "206", "AA555BB",2018);

//Registro el nuevo auto

registroAutomotorAustral.registrarAuto(auto4);

console.log("--------------------------------------------------------");

//Vuelvo a mostrar la lista completa para comprobar el nuevo registro

registroAutomotorAustral.mostrarListaCompleta();

//Se consulta si el auto esta en la lista

console.log(registroAutomotorAustral.consultarAuto(auto1));

console.log("--------------------------------------------------------");

//En el siguiente caso se modifica la patente del auto

registroAutomotorAustral.modificarAuto(auto1,"CC888CC","Volkswagen",2020,"Gol");

console.log(registroAutomotorAustral.consultarAuto(auto1));

console.log("--------------------------------------------------------");

//Instancio otro auto para consulta si esta en la lista

let auto5:Auto = new Auto("Peugeot", "207", "AA666BB",2020);

//Consulto si esta en la lista deberia salir que no esta registrado

console.log(registroAutomotorAustral.consultarAuto(auto5));

console.log("--------------------------------------------------------");

//Elimino un auto de la lista

registroAutomotorAustral.eliminarAuto(auto2);

//Muestro la lista completa para comprobar que se elmimino el auto
registroAutomotorAustral.mostrarListaCompleta();


