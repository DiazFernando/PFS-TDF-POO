import { Robot } from "./robot";

export class RobotPileta extends Robot{

    public limpiar():void{
        console.log("limpiando Pileta")
    }

    public cargar():void{
        console.log("cargando")
    }
}