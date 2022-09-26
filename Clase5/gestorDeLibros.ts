import { Libro } from "./libro";

export class GestorDeLibros{
    //Estados o Atributos

    private baseDeDatosDeLibros: Libro[];
    
    //constructor
    
    constructor(listaDeLibros:Libro[]){
        this.baseDeDatosDeLibros = listaDeLibros;
    }

    //Funcionalidades

    mostrarBaseDeDatos(){

        this.baseDeDatosDeLibros.forEach(object =>{
            console.log(object);
        });
    }

    insertarLibro(libroAIngresar:Libro){
        this.baseDeDatosDeLibros.push(libroAIngresar)
    }

    ConsultarPorElLibro(libroAConsultar:Libro):boolean{
        let respuesta : boolean =false;
        for(let i : number = 0; i < this.baseDeDatosDeLibros.length; i++){
            if(this.baseDeDatosDeLibros[i].getNombreDelLibro() === libroAConsultar.getNombreDelLibro()){
                respuesta = true;
            }
        }
        return respuesta;
    }
}