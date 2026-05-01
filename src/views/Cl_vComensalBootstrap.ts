import { I_vComensal } from "../interfaces/I_vComensal.js";

export default class Cl_vComensalBootstrap implements I_vComensal {
  private inNombre: HTMLInputElement;
  private inApellido: HTMLInputElement;
  private inCedula: HTMLInputElement;
  private inSexo: HTMLSelectElement;
  private inFechaNac: HTMLInputElement;
  private inTurno: HTMLSelectElement;
  private btAceptar: HTMLButtonElement;
  private btCancelar: HTMLButtonElement;
  private modal: any;

  constructor() {
    this.inNombre = document.getElementById("comensal_inNombre") as HTMLInputElement;
    this.inApellido = document.getElementById("comensal_inApellido") as HTMLInputElement;
    this.inCedula = document.getElementById("comensal_inCedula") as HTMLInputElement;
    this.inSexo = document.getElementById("comensal_inSexo") as HTMLSelectElement;
    this.inFechaNac = document.getElementById("comensal_inFechaNac") as HTMLInputElement;
    this.inTurno = document.getElementById("comensal_inTurno") as HTMLSelectElement;
    this.btAceptar = document.getElementById("comensal_btAceptar") as HTMLButtonElement;
    this.btCancelar = document.getElementById("comensal_btCancelar") as HTMLButtonElement;
    // @ts-ignore
    this.modal = new bootstrap.Modal(document.getElementById("modalComensal"));
  }

  get nombre(): string { return this.inNombre.value; }
  get apellido(): string { return this.inApellido.value; }
  get cedula(): string { return this.inCedula.value; }
  get sexo(): string { return this.inSexo.value; }
  get fechaNac(): string { return this.inFechaNac.value; }
  get turno(): number { return parseInt(this.inTurno.value); }

  mostrar(): void { this.modal.show(); }
  ocultar(): void { this.modal.hide(); }

  onAceptar(callback: () => void): void { this.btAceptar.onclick = callback; }
  onCancelar(callback: () => void): void { this.btCancelar.onclick = callback; }
}