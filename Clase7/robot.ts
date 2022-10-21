export abstract class Robot{
    protected marca:string;
    protected voltaje:number;

    constructor(marca:string, voltaje:number){
        this.marca =marca;
        this.voltaje= voltaje;
    }

    abstract limpiar();
    abstract cargar();

    public saludar():void{
        console.log("Buenos dias");
    }
}