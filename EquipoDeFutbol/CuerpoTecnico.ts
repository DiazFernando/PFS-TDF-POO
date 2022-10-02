import { Persona } from "./Persona";

export class CuerpoTecnico extends Persona{
    
    //Atributos

    private cargo:string;

    //Constructor

    constructor(nombre:string,apellido:string,numPasaporte:number,fechaDeNacimiento:string,cargo:string){
        
        super(nombre,apellido,numPasaporte,fechaDeNacimiento);
        this.cargo = cargo;
        
    }

    //Funcionalidades

    getCargo():string{
        return this.cargo;
    }

    setCargo(nuevoCargo:string){
        this.cargo = nuevoCargo;
    }

    toString():string{
        return "\n"+"NOMBRE: " + this.getNombre() + "\n" + "APELLIDO: " + this.getApellido()  + "\n" + "FECHA DE NACIMIENTO: " + this.getFechaDeNacimiento() + "\n" +"NUMERO DE PASAPORTE: " + String(this.getNumeroDePasaporte()) + "\n" +"CARGO: "+ this.getCargo()+"\n";
        
    }    

}
