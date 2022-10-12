import { Persona } from "./Persona";

export abstract class Cuenta extends Persona{
    protected numCuenta:number;
    protected saldo:number;
    protected cliente : Persona;

    constructor (numeroDeCuenta:number,saldoActual:number,nombreCliente:string,apellidoCliente:string,dniCliente:number){
        super(nombreCliente,apellidoCliente,dniCliente);
        this.numCuenta = numeroDeCuenta;
        this.saldo = saldoActual;
        this.cliente = new Persona(nombreCliente,apellidoCliente,dniCliente);
    }

    public getNumeroDeCuenta():number{
        return this.numCuenta;
    }

    public getSaldo():number{
        return this.saldo;
    }

    public getCliente():string{
        return this.cliente.toString();
    }

    public ingresar(plataAIngresar:number):void{
        this.saldo = this.saldo + plataAIngresar;
    }

    abstract retirar(montoAretirar:number):void;

    abstract actualizarSaldo():void;
}