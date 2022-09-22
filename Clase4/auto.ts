class Auto{

    // Estados o Atributos    

    private marca:string;
    private modelo:string;
    private patente:string;
    private anio:number;

    // Constructor

    constructor(marcaAuto:string,modeloAuto:string,patenteAuto:string,anioAuto:number){
        this.marca = marcaAuto;
        this.modelo = modeloAuto;
        this.patente = patenteAuto;
        this.anio = anioAuto;

    }

    // Funcionalidades

    getMarca():string{
        return this.marca;
    }

    setMarca(nuevaMarca:string):void{
        this.marca= nuevaMarca;
    }

    getModelo():string{
        return this.modelo;
    }

    setModelo(nuevoModelo:string):void{
        this.modelo= nuevoModelo;
    }

    getPatente():string{
        return this.patente;
    }

    setPatente(nuevaPatente:string):void{
        this.patente= nuevaPatente;
    }

    getAnio():number{
        return this.anio;
    }

    setAnio(nuevoAnio:number):void{
        this.anio= nuevoAnio;
    }
}

let auto1 = new Auto("Fiat","Uno","AA123AA",2020);

console.log(auto1.getMarca());
console.log(auto1.getModelo());
console.log(auto1.getPatente());
console.log(auto1.getAnio());