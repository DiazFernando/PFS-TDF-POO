class Radio{
    //atriutos o estados

    marca:string;
    modelo:string;
    encendidoApagado:boolean;
    volumenActual:number;
    dialActual:number;

    //funcionalidades

    constructor(marca:string,volumen:number,dial:number){
        this.marca = marca;
        this.volumenActual = volumen;
        this.dialActual = dial;
    }

    encenderApagar(){
        if (this.encendidoApagado)
            this.encendidoApagado=false;
        else
        this.encendidoApagado=true;
    }

    subirVolumen(){
        this.volumenActual = this.volumenActual + 1;
        console.log(this.dialActual)
    }

    bajarVolumen(){
        this.volumenActual = this.volumenActual - 1;
        console.log(this.dialActual)
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

let radio = new Radio("Sony",10,88.5);
radio.encenderApagar();
radio.subirVolumen();
radio.subirDial();