import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mComensal extends Cl_mPersona {
  private _turno: number = 0;

  constructor({ nombre, apellido, cedula, sexo, fechaNac, turno }: 
    { nombre: string; apellido: string; cedula: string; sexo: string; fechaNac: string; turno: number }) {
    super({ nombre, apellido, cedula, sexo, fechaNac });
    this.turno = turno;
  }

  get turno(): number { return this._turno; }
  set turno(v: number) { this._turno = v; }

  get costoBase(): number {
    switch (this.turno) {
      case 1: return 5;
      case 2: return 7;
      case 3: return 10;
      default: return 0;
    }
  }

  get tieneDescuento(): boolean {
    // Usamos los nuevos nombres de los métodos
    if (this.sexo === "F" && this.edad > 50) return true;
    if (this.sexo === "M" && this.edad >= 60) return true;
    return false;
  }

  get calcDescuento(): number {
    return this.tieneDescuento ? this.costoBase * 0.5: 0;
  }

  get montoAPagar(): number {
    return this.tieneDescuento ? this.costoBase * 0.5 : this.costoBase;
  }

}