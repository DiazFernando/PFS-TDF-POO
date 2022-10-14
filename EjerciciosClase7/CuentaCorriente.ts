import { Cuenta } from "./Cuenta";

export class CuentaCorriente extends Cuenta{
    protected interesFijo:number;
    

    constructor(numDeCuenta:number,saldoActual:number,nombreCliente:string,apellidoCliente:string,dniCliente:number){
        super(numDeCuenta,saldoActual,nombreCliente,apellidoCliente,dniCliente);
        this.interesFijo = 1.015;
        
    }

    toString():string{
        return "Nombre Del Cliente: " + this.getNombre() + "\n" + "Apellido Del Cliente: " +  this.getApellido()  + "\n" + "DNI Del Cliente: " + String(this.getDni()) + "\n" + "Saldo Actual: " + this.getSaldo();
    }

    actualizarSaldo(): void {
        this.saldo = this.saldo * this.interesFijo;
    }

    retirar(montoAretirar:number):void {
        this.saldo = this.saldo - montoAretirar;
     }

 }
