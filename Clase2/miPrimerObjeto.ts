class Radio{
    //atriutos o estados

    private marca:string;
    private modelo:string;
    private encendidoApagado:boolean;
    private volumenActual:number;
    private dialActual:number;
    private standby:string;
 

    //funcionalidades

    constructor(marca:string,volumen:number,dial:number,modelo:string){
        this.marca = marca;
        this.volumenActual = volumen;
        this.dialActual = dial;
        this.encendidoApagado = false;
        this.modelo = modelo;
        this.standby = "APAGADO";
 
    }

    
    public getMarca():string {
        return this.marca;
    }

    public setMarca(nuevaMarca:string) {
        this.marca = nuevaMarca;
    }

    public getModelo():string {
        return this.modelo;
    }

    public setModelo(nuevoModelo:string) {
        this.modelo = nuevoModelo;
    }
    
    public getStandby():string{
        return this.standby;
    }

    public encenderApagar(){
       
        if (this.encendidoApagado){
            this.standby = "APAGADO";
        } else {
            this.encendidoApagado=true;
            this.standby = "ENCENDIDO";
        }

    }

    public getVolumen():number{
        return this.volumenActual;
    }

    public subirVolumen(){
        this.volumenActual = this.volumenActual + 1;
    }

    public bajarVolumen(){
        this.volumenActual = this.volumenActual - 1;
    }

    public getDial():number{
        return this.dialActual;
    }

    public subirDial(){
        this.dialActual = this.dialActual + 0.5;
    }

    public bajarDial(){
        this.dialActual = this.dialActual + 0.5;
    }

    public toString():string{
        let respuesta:string = this.getMarca() + " / " + this.getModelo() + " / ";
        return respuesta;
    }

}

let miRadio = new Radio("Sony",10,88.5,"vx-20");
//consulto el standby de mi radio por defaul viene apagado
console.log(miRadio.getStandby());
//Enciendo mi radio
miRadio.encenderApagar();
//consulto nuevamente el standby deberia haber encendido
console.log(miRadio.getStandby());
//consulto el volumen por parametro es 10
console.log(miRadio.getVolumen());
//subo +2 de volumen
miRadio.subirVolumen();
miRadio.subirVolumen();
//consulto el volumen deberia dar 12
console.log(miRadio.getVolumen());
// consulto los datos de mi radio
console.log(miRadio.toString());
