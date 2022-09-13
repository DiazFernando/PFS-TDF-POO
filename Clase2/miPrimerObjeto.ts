class Radio{
    //atriutos o estados

    marca:string;
    modelo:string;
    encendidoApagado:boolean;
    volumenActual:number;
    dialActual:number;

    //funcionalidades

    constructor(marca:string,volumen:number,dial:number,modelo:string){
        this.marca = marca;
        this.volumenActual = volumen;
        this.dialActual = dial;
        this.encendidoApagado = false;
        this.modelo = modelo
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
