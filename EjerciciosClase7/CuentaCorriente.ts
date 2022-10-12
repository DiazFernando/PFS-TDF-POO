import { Cuenta } from "./Cuenta";

export class CuentaCorriente extends Cuenta{
    protected interesFijo:number;
    protected saldoMin:number;

    constructor(numDeCuenta:number,saldoActual:number,nombreCliente:string,apellidoCliente:string,dniCliente:number){
        super(numDeCuenta,saldoActual,nombreCliente,apellidoCliente,dniCliente);
        this.interesFijo = 1.5;
        this.saldoMin = 0;
    }

    toString():string{
        return this.getNombre() + "\n" + this.getApellido()  + "\n" + String(this.getDni()) + "\n"  + "\n" + String(this.saldoMin) + "\n" + this.getSaldo();
    }

    actualizarSaldo(): void {
        this.saldo = this.saldo * this.interesFijo;
    }

    retirar(montoAretirar:number):void {
        if(montoAretirar < this.saldo && montoAretirar > this.saldoMin){
            this.saldo = this.saldo - montoAretirar;
            console.log("Retiro " + montoAretirar);
        }else{
            console.log("Saldo Insuficiente");
        }
    }
 }