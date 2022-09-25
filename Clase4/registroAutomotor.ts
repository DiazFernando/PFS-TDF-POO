import { Auto } from "./auto";

export class RegistroAutomotor{
    private listadoDeAutos: Auto[];
    

    constructor (listaDeAutos:Auto[]){
        this.listadoDeAutos = listaDeAutos;
    }

    mostrarListaCompleta(){

        this.listadoDeAutos.forEach(object =>{
            console.log(object);
        });
    }
    consultarAuto(autoAConsultar:Auto):string{
        let respuesta:string = " No esta Registado";

        for(let i : number = 0; i < this.listadoDeAutos.length; i++){
            if(this.listadoDeAutos[i].getPatente() === autoAConsultar.getPatente()){
                respuesta = "El Auto esta registrado: " + this.listadoDeAutos[i].tostring();
            }
        }
        return respuesta;
    }

    registrarAuto(autoARegistrar:Auto):void{
        this.listadoDeAutos.push(autoARegistrar);
    }
    
    eliminarAuto(autoAEliminar:Auto):void{
        for(let i : number = 0; i < this.listadoDeAutos.length;i++){
            if(this.listadoDeAutos[i].getPatente() === autoAEliminar.getPatente()){
                this.listadoDeAutos.splice(i,1);
            }
        }
    }

    modificarAuto(autoAModificar:Auto,nuevaPatente:string,nuevaMarca:string,nuevoAnio:number,nuevoModelo:string){
        for(let i : number = 0; i < this.listadoDeAutos.length; i++){
            if(this.listadoDeAutos[i].getPatente() === autoAModificar.getPatente()){
                this.listadoDeAutos[i].setPatente(nuevaPatente);
                this.listadoDeAutos[i].setMarca(nuevaMarca);
                this.listadoDeAutos[i].setAnio(nuevoAnio);
                this.listadoDeAutos[i].setModelo(nuevoModelo);
            }
        }
    }


}