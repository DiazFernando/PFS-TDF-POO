"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listaDeAutos) {
        this.listadoDeAutos = listaDeAutos;
    }
    RegistroAutomotor.prototype.mostrarListaCompleta = function () {
        this.listadoDeAutos.forEach(function (object) {
            console.log(object);
        });
    };
    RegistroAutomotor.prototype.consultarAuto = function (autoAConsultar) {
        var respuesta = " No esta Registado";
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (this.listadoDeAutos[i].getPatente() === autoAConsultar.getPatente()) {
                respuesta = "El Auto esta registrado: " + this.listadoDeAutos[i].tostring();
            }
        }
        return respuesta;
    };
    RegistroAutomotor.prototype.registrarAuto = function (autoARegistrar) {
        this.listadoDeAutos.push(autoARegistrar);
    };
    RegistroAutomotor.prototype.eliminarAuto = function (autoAEliminar) {
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (this.listadoDeAutos[i].getPatente() === autoAEliminar.getPatente()) {
                this.listadoDeAutos.splice(i, 1);
            }
        }
    };
    RegistroAutomotor.prototype.modificarAuto = function (autoAModificar, nuevaPatente, nuevaMarca, nuevoAnio, nuevoModelo) {
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (this.listadoDeAutos[i].getPatente() === autoAModificar.getPatente()) {
                this.listadoDeAutos[i].setPatente(nuevaPatente);
                this.listadoDeAutos[i].setMarca(nuevaMarca);
                this.listadoDeAutos[i].setAnio(nuevoAnio);
                this.listadoDeAutos[i].setModelo(nuevoModelo);
            }
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
