export default class Cl_mPersona {
    _nombre = "";
    _apellido = "";
    _cedula = "";
    _sexo = "";
    _fechaNac = "";
    constructor({ nombre, apellido, cedula, sexo, fechaNac }) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.sexo = sexo;
        this.fechaNac = fechaNac;
    }
    // Getters y Setters
    get nombre() { return this._nombre; }
    set nombre(v) { this._nombre = v; }
    get apellido() { return this._apellido; }
    set apellido(v) { this._apellido = v; }
    get cedula() { return this._cedula; }
    set cedula(v) { this._cedula = v; }
    get sexo() { return this._sexo; }
    set sexo(v) { this._sexo = v; }
    get fechaNac() { return this._fechaNac; }
    set fechaNac(v) { this._fechaNac = v; }
    get edad() {
        const hoy = new Date();
        const cumple = new Date(this.fechaNac);
        let edad = hoy.getFullYear() - cumple.getFullYear();
        const m = hoy.getMonth() - cumple.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < cumple.getDate()))
            edad--;
        return edad;
    }
}
//# sourceMappingURL=Cl_mPersona.js.map