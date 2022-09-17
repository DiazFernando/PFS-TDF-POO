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
    
    getStandby():string{
        return this.standby;
    }

    encenderApagar(){
        if (this.encendidoApagado){
            this.encendidoApagado=false
            console.log(this.encendidoApagado)
        } else {
            this.encendidoApagado=true
            console.log(this.encendidoApagado)
        }

    }

    getVolumen():number{
        return this.volumenActual
    }

    subirVolumen(){
        this.volumenActual = this.volumenActual + 1;
        console.log(this.volumenActual)
    }

    bajarVolumen(){
        this.volumenActual = this.volumenActual - 1;
        console.log(this.volumenActual)
    }

    subirDial(){
        this.dialActual = this.dialActual + 0.5;
        console.log(this.dialActual)
    }

    bajarDial(){
        this.dialActual = this.dialActual + 0.5;
        console.log(this.dialActual)
    }

}

let miRadio = new Radio("Sony",10,88.5,"vx-20");
miRadio.encenderApagar();
miRadio.subirVolumen();
miRadio.subirDial();
