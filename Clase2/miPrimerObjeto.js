var Radio = /** @class */ (function () {
    //funcionalidades
    function Radio(marca, volumen, dial) {
        this.marca = marca;
        this.volumenActual = volumen;
        this.dialActual = dial;
        this.encendidoApagado = false;
    }
    Radio.prototype.encenderApagar = function () {
        if (this.encendidoApagado)
            this.encendidoApagado = false;
        else
            this.encendidoApagado = true;
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
var miRadio = new Radio("Sony", 10, 88.5);
miRadio.encenderApagar();
miRadio.subirVolumen();
miRadio.subirDial();
