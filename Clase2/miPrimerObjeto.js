var Radio = /** @class */ (function () {
    //funcionalidades
    function Radio(marca, volumen, dial, modelo) {
        this.marca = marca;
        this.volumenActual = volumen;
        this.dialActual = dial;
        this.encendidoApagado = false;
        this.modelo = modelo;
        this.standby = "APAGADO";
    }
    Radio.prototype.getMarca = function () {
        return this.marca;
    };
    Radio.prototype.setMarca = function (nuevaMarca) {
        this.marca = nuevaMarca;
    };
    Radio.prototype.getModelo = function () {
        return this.modelo;
    };
    Radio.prototype.setModelo = function (nuevoModelo) {
        this.modelo = nuevoModelo;
    };
    Radio.prototype.getStandby = function () {
        return this.standby;
    };
    Radio.prototype.encenderApagar = function () {
        if (this.encendidoApagado) {
            this.standby = "APAGADO";
        }
        else {
            this.encendidoApagado = true;
            this.standby = "ENCENDIDO";
        }
    };
    Radio.prototype.getVolumen = function () {
        return this.volumenActual;
    };
    Radio.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Radio.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    Radio.prototype.getDial = function () {
        return this.dialActual;
    };
    Radio.prototype.subirDial = function () {
        this.dialActual = this.dialActual + 0.5;
    };
    Radio.prototype.bajarDial = function () {
        this.dialActual = this.dialActual + 0.5;
    };
    Radio.prototype.toString = function () {
        var respuesta = this.getMarca() + " / " + this.getModelo() + " / ";
        return respuesta;
    };
    return Radio;
}());
var miRadio = new Radio("Sony", 10, 88.5, "vx-20");
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
