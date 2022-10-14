import { CuentaAhorro } from "./CuentaAhorro";
import { CuentaCorriente } from "./CuentaCorriente";

let cuenta1:CuentaAhorro = new CuentaAhorro(1.012,112233,1000,"Fernando","Diaz",36605873);
let cuenta2:CuentaCorriente = new CuentaCorriente(113355,1500,"Fernando","Diaz",36605873);

console.log(cuenta1.getSaldo());
cuenta1.retirar(300);
console.log(cuenta1.getSaldo());
cuenta1.actualizarSaldo();
console.log(cuenta1.getSaldo());
console.log(cuenta1.toString());

// Se retira  un monto elevado para coprobar que funcione la verificacion de saldo insuficiente
cuenta1.retirar(2000);

console.log("-------------------------------------------------------")

console.log(cuenta2.getSaldo());
cuenta2.retirar(300);
console.log(cuenta2.getSaldo());
cuenta2.actualizarSaldo();
console.log(cuenta2.getSaldo());
console.log(cuenta2.toString());

