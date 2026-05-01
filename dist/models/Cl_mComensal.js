import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mComensal extends Cl_mPersona {
    _turno = 0;
    constructor({ nombre, apellido, cedula, sexo, fechaNac, turno }) {
        super({ nombre, apellido, cedula, sexo, fechaNac });
        this.turno = turno;
    }
    get turno() { return this._turno; }
    set turno(v) { this._turno = v; }
    get costoBase() {
        switch (this.turno) {
            case 1: return 5;
            case 2: return 7;
            case 3: return 10;
            default: return 0;
        }
    }
    get tieneDescuento() {
        // Usamos los nuevos nombres de los métodos
        if (this.sexo === "F" && this.edad > 50)
            return true;
        if (this.sexo === "M" && this.edad >= 60)
            return true;
        return false;
    }
    get calcDescuento() {
        return this.tieneDescuento ? this.costoBase * 0.5 : 0;
    }
    get montoAPagar() {
        return this.tieneDescuento ? this.costoBase * 0.5 : this.costoBase;
    }
}
//# sourceMappingURL=Cl_mComensal.js.map