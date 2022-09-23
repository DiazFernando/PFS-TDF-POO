class RegistroAutomotor{
    private listadoDeAutos: Auto[];
    

    constructor (listaDeAutos:Auto[]){
        this.listadoDeAutos = listaDeAutos;
    }

    consultarAuto(autoAConsultar:Auto):boolean{
        let respuesta:boolean = false;

        for(let i : number = 0; i < this.listadoDeAutos.length; i++){
            if(this.listadoDeAutos[i].getPatente() === autoAConsultar.getPatente()){
                respuesta = true;
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

let auto1:Auto = new Auto ("Volkswagen","Gol","AA111AA",2020);
let auto2:Auto = new Auto ("Fiat","Cronos","BB222BB",2022);
let auto3:Auto = new Auto ("Chevrolet","ASTRA","CC333CC",2019);

let arregloDeAutos:Auto[] = [auto1,auto2,auto3];

let registroAutomotorAustral:RegistroAutomotor = new RegistroAutomotor(arregloDeAutos);
