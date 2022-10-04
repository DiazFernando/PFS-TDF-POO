export class Persona{
    
    //Atributos

    private nombre:string;
    private apellido:string;
    private numDePasaporte:number;
    private fechaDeNacimiento: Date;

    //Constructor

    constructor(nombre:string,apellido:string,numPasaporte:number,fechaDeNacimiento:string){
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.numDePasaporte = numPasaporte;
        this.fechaDeNacimiento = new Date(fechaDeNacimiento);
        
        
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

    getFechaDeNacimiento():Date{
        return this.fechaDeNacimiento;
    }

    toString():string{
        return this.getNombre() + "\n" + this.getApellido()  + "\n" + this.getFechaDeNacimiento() + "\n" + String(this.getNumeroDePasaporte());
    }

}
