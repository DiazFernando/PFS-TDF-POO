export class Persona{
    
    //Atributos

    private nombre:string;
    private apellido:string;
    private numDePasaporte:number;
    private fechaDeNacimiento: string;

    //Constructor

    constructor(nombre:string,apellido:string,numPasaporte:number,fechaDeNacimiento:string){
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.numDePasaporte = numPasaporte;
        this.fechaDeNacimiento = fechaDeNacimiento;
        
        
    }

    //Funcionalidades

    getNombre():string{
        return this.nombre
    }

    getApellido():string{
        return this.apellido
    }

    getNumeroDePasaporte():number{
        return this.numDePasaporte
    }

    getFechaDeNacimiento():string{
        return this.fechaDeNacimiento;
    }

    toString():string{
        return this.getNombre() + "\n" + this.getApellido()  + "\n" + this.getFechaDeNacimiento() + "\n" + String(this.getNumeroDePasaporte());
    }

}