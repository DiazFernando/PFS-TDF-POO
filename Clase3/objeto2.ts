class Electrodomestico {

    //estados o atributos

    private nombre:string;
    private precioBase:number;
    private color:string;
    private consumoEnergetico:number;
    private peso:number;

    //constructor

    constructor(nombre:string,precio:number,color:string,consumo:number,peso:number){
        
        this.nombre = nombre;
        this.precioBase = precio;
        this.color = color;
        this.consumoEnergetico = consumo;
        this.peso = peso;

    }

    //Funcionalidades

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(nombre:string):void{
        this.nombre = nombre;
    }
    
    public getPrecioBase():number{
        return this.precioBase;
    }

    public setPrecioBase(precio:number):void{
        this.precioBase = precio;

    }

    public getColor():string{
        return this.color;
    }

    public setColor(color:string):void{
        this.color = color;
    }

    public getConsumo():number{
        return this.consumoEnergetico;
    }

    public setConsumo(consumo:number):void{
        this.consumoEnergetico = consumo;

    }

    public getPeso():number{
        return this.peso;
    }

    public setPeso(peso:number):void{
        this.peso = peso;

    }

    public comprobarConsumo():boolean{
        
        let respuesta : boolean = false;

        if(this.consumoEnergetico <= 15){
            respuesta = true;  
        }
        return respuesta;
    }

    public calcularBalance():number{
        let resultado = Number(this.precioBase) / Number(this.peso);
        return resultado;
    }

    public gamaDelProducto():string{
        
        let gamaProducto = "Gama Baja";
        
        if(this.calcularBalance()>= 3){
            gamaProducto = "Gama Alta";
        }
        return gamaProducto;
            
    }
        
    

}

let miElectrodomestico = new Electrodomestico("plancha",500,"blanco",150,300);

console.log(miElectrodomestico.getColor());
console.log(miElectrodomestico.comprobarConsumo());
console.log(miElectrodomestico.calcularBalance());
console.log(miElectrodomestico.gamaDelProducto());
miElectrodomestico.setColor("Azul");
console.log(miElectrodomestico.getColor());
console.log(miElectrodomestico.getNombre());