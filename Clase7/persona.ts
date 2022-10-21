import { InterfazPersona } from "./interfazPersona";

export class Persona implements InterfazPersona{
    protected nombre:string;
    protected apellido:string;

    constructor(nombre:string,apellido:string){
        this.nombre = nombre;
        this.apellido= apellido;
    }

    public setNombre(nuevoNombre: string): void {
        this.nombre=nuevoNombre;
    }

    public setApellido(nuevoApellido: string): void {
        this.apellido = nuevoApellido;
    }

    public getApellido():string{
        return this.apellido;
    }

    public getNombre(): string {
        return this.nombre;
    }
}