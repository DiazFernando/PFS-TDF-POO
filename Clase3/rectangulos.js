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
    Rectangulo.prototype.getcompararRectangulos = function (rectangulo1, rectangulo2) {
        var resultado = 0;
        if (rectangulo1 > rectangulo2) {
            resultado = 1;
        }
        else if (rectangulo1 < rectangulo2) {
            resultado = -1;
        }
        return resultado;
    };
    Rectangulo.prototype.DeterminarSiEsCuadrado = function () {
        var respuesta = "Es un cuadrado";
        if (this.base != this.altura) {
            respuesta = "No es un cuadrado";
        }
        return respuesta;
    };
    Rectangulo.prototype.DeterminarSuPosicion = function () {
        var respuesta = "Esta parado";
        if (this.base > this.altura) {
            respuesta = "Esta acostado";
        }
        return respuesta;
    };
    return Rectangulo;
}());
var primerRectangulo = new Rectangulo(2, 4);
var segundoRectangulo = new Rectangulo(6, 3);
// cree un cuadrado solo para verificar los resultados
var cuadrado = new Rectangulo(2, 2);
var areaRectangulo1 = primerRectangulo.getAreaDelRectangulo();
var areaRectangulo2 = segundoRectangulo.getAreaDelRectangulo();
console.log(primerRectangulo.getAreaDelRectangulo());
console.log(segundoRectangulo.getAreaDelRectangulo());
console.log(cuadrado.getAreaDelRectangulo());
var comparacion = primerRectangulo.getcompararRectangulos(areaRectangulo1, areaRectangulo2);
console.log(comparacion);
var comparacion2 = primerRectangulo.getcompararRectangulos(areaRectangulo1, areaRectangulo1);
console.log(comparacion2);
console.log(primerRectangulo.DeterminarSiEsCuadrado());
console.log(segundoRectangulo.DeterminarSiEsCuadrado());
console.log(cuadrado.DeterminarSiEsCuadrado());
console.log(primerRectangulo.DeterminarSuPosicion());
console.log(segundoRectangulo.DeterminarSuPosicion());
