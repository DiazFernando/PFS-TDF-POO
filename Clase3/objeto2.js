var Electrodomestico = /** @class */ (function () {
    //constructor
    function Electrodomestico(nombre, precio, color, consumo, peso) {
        this.nombre = nombre;
        this.precioBase = precio;
        this.color = color;
        this.consumoEnergetico = consumo;
        this.peso = peso;
    }
    //Funcionalidades
    Electrodomestico.prototype.getNombre = function () {
        return this.nombre;
    };
    Electrodomestico.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Electrodomestico.prototype.getPrecioBase = function () {
        return this.precioBase;
    };
    Electrodomestico.prototype.setPrecioBase = function (precio) {
        this.precioBase = precio;
    };
    Electrodomestico.prototype.getColor = function () {
        return this.color;
    };
    Electrodomestico.prototype.setColor = function (color) {
        this.color = color;
    };
    Electrodomestico.prototype.getConsumo = function () {
        return this.precioBase;
    };
    Electrodomestico.prototype.setConsumo = function (consumo) {
        this.consumoEnergetico = consumo;
    };
    Electrodomestico.prototype.getPeso = function () {
        return this.peso;
    };
    Electrodomestico.prototype.setPeso = function (peso) {
        this.peso = peso;
    };
    Electrodomestico.prototype.comprobarConsumo = function () {
        if (this.consumoEnergetico <= 15)
            return true;
        else
            return false;
    };
    Electrodomestico.prototype.calcularBalance = function () {
        var resultado = Number(this.precioBase) / Number(this.peso);
        return resultado;
    };
    Electrodomestico.prototype.gamaDelProducto = function () {
        if (this.calcularBalance() >= 3)
            return "Alta";
        else
            return "Baja";
    };
    return Electrodomestico;
}());
var miElectrodomestico = new Electrodomestico("plancha", 500, "blanco", 150, 300);
console.log(miElectrodomestico.getColor());
console.log(miElectrodomestico.comprobarConsumo());
console.log(miElectrodomestico.calcularBalance());
console.log(miElectrodomestico.gamaDelProducto());
