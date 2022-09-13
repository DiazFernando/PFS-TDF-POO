var Radio = /** @class */ (function () {
    //funcionalidades
    function Radio(marca, volumen, dial, modelo) {
        this.marca = marca;
        this.volumenActual = volumen;
        this.dialActual = dial;
        this.encendidoApagado = false;
        this.modelo = modelo;
    }
    Radio.prototype.encenderApagar = function () {
        if (this.encendidoApagado) {
            this.encendidoApagado = false;
            console.log(this.encendidoApagado);
        }
        else {
            this.encendidoApagado = true;
            console.log(this.encendidoApagado);
        }
    };
    Radio.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
        console.log(this.volumenActual);
    };
    Radio.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
        console.log(this.volumenActual);
    };
    Radio.prototype.subirDial = function () {
        this.dialActual = this.dialActual + 0.5;
        console.log(this.dialActual);
    };
    Radio.prototype.bajarDial = function () {
        this.dialActual = this.dialActual + 0.5;
        console.log(this.dialActual);
    };
    return Radio;
}());
var miRadio = new Radio("Sony", 10, 88.5, "vx-20");
miRadio.encenderApagar();
miRadio.subirVolumen();
miRadio.subirDial();
