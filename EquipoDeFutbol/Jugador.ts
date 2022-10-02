import { Persona } from "./Persona";

export class Jugador extends Persona{
    
    //Atributos

    private posicion:string;
    private numeroDeCamiseta:number;

    //Constructor

    constructor(nombre:string,apellido:string,numPasaporte:number,fechaDeNacimiento:string,posicion:string,numeroDeCamiseta:number){
        
        super(nombre,apellido,numPasaporte,fechaDeNacimiento);
        this.posicion = posicion;
        this.numeroDeCamiseta = numeroDeCamiseta;
        
    }   
         
    //Funcionalidades

    getPosicion():string{
        return this.posicion;
    }

    setPosicion(nuevaPosicion:string){
        this.posicion = nuevaPosicion;
    }

    getNumeroDeCamiseta():number{
        return this.numeroDeCamiseta;
    }

    setNumeroDeCamiseta(nuevoNumeroDeCamiseta:number){
        this.numeroDeCamiseta = nuevoNumeroDeCamiseta;
    }

    toString():string{
        return "\n" + "NOMBRE: " + this.getNombre() + "\n" +"APELLIDO: "+ this.getApellido()  + "\n" +"FECHA DE NACIMIENTO: "+ this.getFechaDeNacimiento() + "\n" + "NUMERO DE PASAPORTE: " + String(this.getNumeroDePasaporte()) + "\n" + "POSICION: "+ this.getPosicion() + "\n" +"NUMERO DE CAMISETA: " + String(this.getNumeroDeCamiseta())+ "\n";
        
    }
    
}
