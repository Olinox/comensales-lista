export default class Cl_vComensalBootstrap {
    inNombre;
    inApellido;
    inCedula;
    inSexo;
    inFechaNac;
    inTurno;
    btAceptar;
    btCancelar;
    modal;
    constructor() {
        this.inNombre = document.getElementById("comensal_inNombre");
        this.inApellido = document.getElementById("comensal_inApellido");
        this.inCedula = document.getElementById("comensal_inCedula");
        this.inSexo = document.getElementById("comensal_inSexo");
        this.inFechaNac = document.getElementById("comensal_inFechaNac");
        this.inTurno = document.getElementById("comensal_inTurno");
        this.btAceptar = document.getElementById("comensal_btAceptar");
        this.btCancelar = document.getElementById("comensal_btCancelar");
        // @ts-ignore
        this.modal = new bootstrap.Modal(document.getElementById("modalComensal"));
    }
    get nombre() { return this.inNombre.value; }
    get apellido() { return this.inApellido.value; }
    get cedula() { return this.inCedula.value; }
    get sexo() { return this.inSexo.value; }
    get fechaNac() { return this.inFechaNac.value; }
    get turno() { return parseInt(this.inTurno.value); }
    mostrar() { this.modal.show(); }
    ocultar() { this.modal.hide(); }
    onAceptar(callback) { this.btAceptar.onclick = callback; }
    onCancelar(callback) { this.btCancelar.onclick = callback; }
}
//# sourceMappingURL=Cl_vComensalBootstrap.js.map