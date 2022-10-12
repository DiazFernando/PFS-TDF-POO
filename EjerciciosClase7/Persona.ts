export class Persona{
    


    protected nombre:string;
    protected apellido:string;
    protected dni:number;


 

    constructor(nombre:string,apellido:string,numDni:number){
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = numDni;
        
        
    }

    getNombre():string{
        return this.nombre;
    }

    getApellido():string{
        return this.apellido;
    }

    getDni():number{
        return this.dni;
    }

    setNombre(nuevoNombre:string):void{
        this.nombre=nuevoNombre;
    }

    setApellido(nuevoApellido:string):void{
        this.apellido=nuevoApellido;
    }

    setDni(nuevoDni:number):void{
        this.dni=nuevoDni;
    }

    toString():string{
        return this.getNombre() + "\n" + this.getApellido()  + "\n" + String(this.getDni());
    }

}
