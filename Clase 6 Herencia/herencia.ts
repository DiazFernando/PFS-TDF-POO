class Telefono{
    private estaPrendido:boolean;
    private bateriaActual:number;

    constructor(paramBateria:number){
        this.estaPrendido = false;
        this.bateriaActual= paramBateria;

    }

    getEstaPrendido():boolean{
        if (this.estaPrendido===true){
            return true;
        }else{
            return this.estaPrendido;
        }
    }

    getBateriaActual():number{
        return this.bateriaActual;
    }

    mandarMensaje():string{
        let mensaje:string = " ";
        if(this.estaPrendido === true){
            mensaje = "enviar msj";
           }
           return mensaje;
    }
 }