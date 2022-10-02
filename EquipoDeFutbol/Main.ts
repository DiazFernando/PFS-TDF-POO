import { Jugador } from "./Jugador";
import { CuerpoTecnico } from "./CuerpoTecnico";
import { Seleccion } from "./Seleccion";

// Instancio los Jugadores

let jugador1 : Jugador = new Jugador ("EMILIANO","MARTINEZ",101,"02-09-1992","GK",1);
let jugador2 : Jugador = new Jugador ("CRISTIAN","ROMERO",202,"27-04-1998","DFC",13);
let jugador3 : Jugador = new Jugador ("LEANDRO","PAREDES",303,"29-06-1994","MCD",5);
let jugador4 : Jugador = new Jugador ("LAUTARO","MARTINEZ",404,"22-08-1997","DC",22);
let jugador5 : Jugador = new Jugador ("LIONEL","MESSI",505,"24-06-1987","ED",10);

//Instancio el Cuerpo Tecnico

let cuerpoTecnico1 : CuerpoTecnico = new CuerpoTecnico ("LIONEL","SCALONI",606,"16-05-1978","DT");
let cuerpoTecnico2 : CuerpoTecnico = new CuerpoTecnico ("PABLO","AIMAR",707,"03-11-1979","AYUDANTE DE CAMPO");
let cuerpoTecnico3 : CuerpoTecnico = new CuerpoTecnico ("LUIS","MARTIN",808,"02-02-1969","PREPARADOR FISICO");
let cuerpoTecnico4 : CuerpoTecnico = new CuerpoTecnico ("MARTIN","TOCALLI",909,"14-09-1973","ENTRENADOR DE ARQUEROS");

//Instancio la Selección

let seleccion: Seleccion = new Seleccion("ARGENTINA");

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

console.log(seleccion.mostrarJugador("LIONEL","MESSI"));

console.log("-------------------------------------------------------------");

console.log(seleccion.mostrarCuerpoTecnico("PABLO","AIMAR"));

console.log("-------------------------------------------------------------");

//Muestro la lista completa del plantel

console.log(seleccion.mostrarSeleccionCompleta());

console.log("-------------------------------------------------------------");

console.log("-------------------------------------------------------------");

//Elimino a un jugador y un cuerpo tecnico

seleccion.eliminarJugador("EMILIANO","MARTINEZ");

seleccion.eliminarCuerpoTecnico("PABLO","AIMAR");

console.log("-------------------------------------------------------------");

//Muestro nuevamente la lista completa del plantel para verificar la eliminacion

console.log(seleccion.mostrarSeleccionCompleta());

