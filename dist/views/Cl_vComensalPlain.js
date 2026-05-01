export default class Cl_vComensalPlain {
    inNombre;
    inApellido;
    inCedula;
    inSexo;
    inFechaNac;
    inTurno;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("comensal");
        this.inNombre = document.getElementById("comensal_inNombre");
        this.inApellido = document.getElementById("comensal_inApellido");
        this.inCedula = document.getElementById("comensal_inCedula");
        this.inSexo = document.getElementById("comensal_inSexo");
        this.inFechaNac = document.getElementById("comensal_inFechaNac");
        this.inTurno = document.getElementById("comensal_inTurno");
        this.btCancelar = document.getElementById("comensal_btCancelar");
        this.btAceptar = document.getElementById("comensal_btAceptar");
    }
    get nombre() { return this.inNombre.value; }
    get apellido() { return this.inApellido.value; }
    get cedula() { return this.inCedula.value; }
    get sexo() { return this.inSexo.value; }
    get fechaNac() { return this.inFechaNac.value; }
    get turno() { return +this.inTurno.value; }
    onAceptar(callback) { this.btAceptar.onclick = callback; }
    onCancelar(callback) { this.btCancelar.onclick = callback; }
    mostrar() {
        this.vista.hidden = false;
        this.inNombre.value = "";
        this.inApellido.value = "";
        this.inCedula.value = "";
        this.inFechaNac.value = "";
    }
    ocultar() { this.vista.hidden = true; }
}
//# sourceMappingURL=Cl_vComensalPlain.js.map