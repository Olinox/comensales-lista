export default class Cl_mPersona {
  private _nombre: string = "";
  private _apellido: string = "";
  private _cedula: string = "";
  private _sexo: string = "";
  private _fechaNac: string = "";

  constructor({ nombre, apellido, cedula, sexo, fechaNac }: 
    { nombre: string; apellido: string; cedula: string; sexo: string; fechaNac: string }) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.cedula = cedula;
    this.sexo = sexo;
    this.fechaNac = fechaNac;
  }

  // Getters y Setters
  get nombre(): string { return this._nombre; }
  set nombre(v: string) { this._nombre = v; }

  get apellido(): string { return this._apellido; }
  set apellido(v: string) { this._apellido = v; }

  get cedula(): string { return this._cedula; }
  set cedula(v: string) { this._cedula = v; }

  get sexo(): string { return this._sexo; }
  set sexo(v: string) { this._sexo = v; }

  get fechaNac(): string { return this._fechaNac; }
  set fechaNac(v: string) { this._fechaNac = v; }

  get edad(): number {
    const hoy = new Date();
    const cumple = new Date(this.fechaNac);
    let edad = hoy.getFullYear() - cumple.getFullYear();
    const m = hoy.getMonth() - cumple.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumple.getDate())) edad--;
    return edad;
  }
}