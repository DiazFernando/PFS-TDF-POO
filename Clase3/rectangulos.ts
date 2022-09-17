/*
Crear la clase Rectangulo con las siguientes caracteristicas y su constructor: base, altura 
La funcionalidad de la clase debe ser:

-     Calcular el area
-     Compararlo con otro rectangulo. Devolver 1 si es mayor, 0 son iguales y -1 si es menor.
-     Determinar si es un cuadrado(si base y altura son iguales).
-     Determinar si esta acostado o parado(si el alto es mas que el ancho).
*/
class Rectangulo {

    // Estados o atributos

    private base : number;
    private altura : number;

    // Constructor
    
    constructor (base:number,altura:number){
        
        this.base = base;
        this.altura= altura;

    }

    // Funcionalidades

    public getAreaDelRectangulo():number{
       
        let areaDelRectangulo = Number(this.base * this.altura);

        return areaDelRectangulo;
    }

    public getcompararRectangulos(rectangulo1:number,rectangulo2:number):number{
        let resultado:number = 0;

        if (rectangulo1 > rectangulo2){
            resultado = 1;
        } else if (rectangulo1 < rectangulo2){
            resultado = -1;
        }

        return resultado;

    }

    public DeterminarSiEsCuadrado():string{
        let respuesta:string = "Es un cuadrado";
        if (this.base != this.altura){
            respuesta = "No es un cuadrado";
        }
        return respuesta;
    }

    public DeterminarSuPosicion():string{
        let respuesta:string = "Esta parado";
        if(this.base > this.altura){
            respuesta = "Esta acostado"
        }
        return respuesta;
    }

}

let primerRectangulo = new Rectangulo(2,4);
let segundoRectangulo = new Rectangulo(6,3);
// cree un cuadrado solo para verificar los resultados
let cuadrado =new Rectangulo(2,2);

let areaRectangulo1:number = primerRectangulo.getAreaDelRectangulo();
let areaRectangulo2:number = segundoRectangulo.getAreaDelRectangulo();

console.log(primerRectangulo.getAreaDelRectangulo());
console.log(segundoRectangulo.getAreaDelRectangulo());
console.log(cuadrado.getAreaDelRectangulo());

let comparacion:number = primerRectangulo.getcompararRectangulos(areaRectangulo1,areaRectangulo2);
console.log(comparacion);

let comparacion2:number = primerRectangulo.getcompararRectangulos(areaRectangulo1,areaRectangulo1);
console.log(comparacion2);

console.log(primerRectangulo.DeterminarSiEsCuadrado());
console.log(segundoRectangulo.DeterminarSiEsCuadrado());
console.log(cuadrado.DeterminarSiEsCuadrado());

console.log(primerRectangulo.DeterminarSuPosicion());
console.log(segundoRectangulo.DeterminarSuPosicion());