var fs = require("fs");

export class Libro{
    //estados o atributos

    private nombre:string;
    private genero:string;
    private editorial:string;
    private autor:string;

    //constructor

    constructor(nombreDelLibro:string,generoDelLibro:string,editorialDelLibro:string,autorDelLibro:string){
        this.nombre = nombreDelLibro;
        this.genero = generoDelLibro;
        this.editorial = editorialDelLibro;
        this.autor = autorDelLibro;
    }

    //Funcionalidades

    getNombreDelLibro():string{
        return this.nombre;
    }

    getGeneroDelLibro():string{
        return this.genero;
    }

    getEditorialDelLibro():string{
        return this.editorial;
    }

    getAutorDelLibro():string{
        return this.autor;
    }

    private manipularArchivo(nombre:string, texto:string){
        fs.writeFile(nombre, texto , error => {
            if(error)
                console.log("ERROR");
            else
                console.log("Se creo el archivo");    
        });

    }

    crearArchivo(nombre:string,texto){
        this.manipularArchivo(nombre,texto);
    }

    modificarArchivo(nombre:string,texto){
        this.manipularArchivo(nombre,texto);
    }

    leerArchivo(path:string){
        fs.readFile(path,(error, texto)=>{
            if(error)
                console.log("ERROR");
            else
                console.log(texto.toString());
        })
    }


}