import { Cuenta } from "./Cuenta";

export class CuentaAhorro extends Cuenta{
    protected interesVariable:number;
    protected saldoMin:number;

    constructor(nuevoInteresVariable:number,numDeCuenta:number,saldoActual:number,nombreCliente:string,apellidoCliente:string,dniCliente:number){
        super(numDeCuenta,saldoActual,nombreCliente,apellidoCliente,dniCliente);
        this.interesVariable = nuevoInteresVariable;
        this.saldoMin = 0;
    }

    toString():string{
        return this.getNombre() + "\n" + this.getApellido()  + "\n" + String(this.getDni()) + "\n" + String(this.interesVariable) + "\n" + String(this.saldoMin) + "\n" + this.getSaldo();
    }

    setInteres(nuevoInteres:number):void{
        this.interesVariable=nuevoInteres;
    }

    actualizarSaldo(): void {
        this.saldo = this.saldo * this.interesVariable;
    }

    retirar(montoAretirar:number):void {
        if(montoAretirar < this.saldo && montoAretirar > this.saldoMin){
            this.saldo = this.saldo-montoAretirar;
            console.log("Retiro " + montoAretirar);
        }else{
            console.log("Saldo Insuficiente");
        }
    }

}