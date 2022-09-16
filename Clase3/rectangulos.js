/*
Crear la clase Rectangulo con las siguientes caracteristicas y su constructor: base, altura
La funcionalidad de la clase debe ser:

-     Calcular el area
-     Compararlo con otro rectangulo. Devolver 1 si es mayor, 0 son iguales y -1 si es menor.
-     Determinar si es un cuadrado(si base y altura son iguales).
-     Determinar si esta acostado o parado(si el alto es mas que el ancho).
*/
var Rectangulo = /** @class */ (function () {
    // Constructor
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    // Funcionalidades
    Rectangulo.prototype.getAreaDelRectangulo = function () {
        var areaDelRectangulo = Number(this.base * this.altura);
        return areaDelRectangulo;
    };
    Rectangulo.prototype.compararRectangulos = function (rectangulo1, rectangulo2) {
        var resultado = 0;
        if (rectangulo1 > rectangulo2) {
            resultado = 1;
        }
        else if (rectangulo1 < rectangulo2) {
            resultado = -1;
        }
        return resultado;
    };
    return Rectangulo;
}());
var primerRectangulo = new Rectangulo(2, 4);
var segundoRectangulo = new Rectangulo(3, 6);
var cuadrado = new Rectangulo(2, 2);
var areaRectangulo1 = primerRectangulo.getAreaDelRectangulo();
var areaRectangulo2 = segundoRectangulo.getAreaDelRectangulo();
console.log(primerRectangulo.getAreaDelRectangulo());
console.log(segundoRectangulo.getAreaDelRectangulo());
console.log(cuadrado.getAreaDelRectangulo());
var comparacion = primerRectangulo.compararRectangulos(areaRectangulo1, areaRectangulo2);
console.log(comparacion);
var comparacion2 = primerRectangulo.compararRectangulos(areaRectangulo1, areaRectangulo1);
console.log(comparacion2);
