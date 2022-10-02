import { CuerpoTecnico } from "./CuerpoTecnico";
import { Jugador } from "./Jugador";

export class Seleccion{
    //Atributos

    listaDeJugadores = new Array<Jugador>;
    listaCuerpoTecnico = new Array<CuerpoTecnico>;
    nombre:string;

    //Constructor

    constructor(nombreDeLaSeleccion:string){
        this.nombre = nombreDeLaSeleccion;
    }

    //Funcionalidades

    getNombreDeLaSeleccion():string{
        return this.nombre;
    }

    setNombreDeLaSeleccion(nuevoNombre:string){
        this.nombre = nuevoNombre;
    }

    mostrarSeleccionCompleta():string{
        return this.listaDeJugadores.toString() + "\n\n"  + this.listaCuerpoTecnico.toString();
    }

    cargarJugador(nombreJugador:Jugador){
        this.listaDeJugadores.push(nombreJugador);
    }

    cargarCuerpoTecnico(nombreDelCuerpoTecnico:CuerpoTecnico){
        this.listaCuerpoTecnico.push(nombreDelCuerpoTecnico);
    }

    eliminarJugador(nombre:string,apellido:string){

        for(let i:number = 0; i < this.listaDeJugadores.length; i++){
            if(this.listaDeJugadores[i].getNombre()=== nombre && this.listaDeJugadores[i].getApellido() === apellido ){
                this.listaDeJugadores.splice(i,1);
            }    
        }
    }

    eliminarCuerpoTecnico(nombre:string,apellido:string){

        for(let i:number = 0; i < this.listaCuerpoTecnico.length; i++){
            if(this.listaCuerpoTecnico[i].getNombre()=== nombre && this.listaCuerpoTecnico[i].getApellido() === apellido ){
                this.listaCuerpoTecnico.splice(i,1);
            }    
        }
    }
        
    mostrarJugador(nombre:string,apellido:string):string{
        for(let i:number = 0; i < this.listaDeJugadores.length; i++){
            if(this.listaDeJugadores[i].getNombre()=== nombre && this.listaDeJugadores[i].getApellido() === apellido ){
                return this.listaDeJugadores[i].toString();
            }    
        }return nombre + " " + apellido + " no esta en la lista";
    }

    mostrarListaDeJugadores():string{
        return this.listaDeJugadores.toString();
    }

    mostrarListaDeCuerpoTecnico():string{
        return this.listaCuerpoTecnico.toString();
    }



    mostrarCuerpoTecnico(nombre:string,apellido:string):string{
        for(let i:number = 0; i < this.listaCuerpoTecnico.length; i++){
            if(this.listaCuerpoTecnico[i].getNombre()=== nombre && this.listaCuerpoTecnico[i].getApellido() === apellido ){
                return this.listaCuerpoTecnico[i].toString();
            }    
        }return nombre + " " + apellido + " no esta en la lista";
    }


}


