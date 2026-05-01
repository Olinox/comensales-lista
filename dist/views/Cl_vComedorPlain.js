export default class Cl_vComedorPlain {
    lblMontoTotal;
    lblPorcDesayuno;
    lblPorcAlmuerzo;
    lblPorcAmbos;
    lblPorcDescuento;
    btNuevoComensal;
    constructor() {
        this.btNuevoComensal = document.getElementById("body_btNuevoComensal");
        this.lblMontoTotal = document.getElementById("body_lblMontoTotal");
        this.lblPorcDesayuno = document.getElementById("body_lblPorcDesayuno");
        this.lblPorcAlmuerzo = document.getElementById("body_lblPorcAlmuerzo");
        this.lblPorcAmbos = document.getElementById("body_lblPorcAmbos");
        this.lblPorcDescuento = document.getElementById("body_lblPorcDescuento");
    }
    onNuevoComensal(callback) {
        this.btNuevoComensal.onclick = callback;
    }
    reportar({ montoTotal, porcDesayuno, porcAlmuerzo, porcAmbos, porcDescuento }) {
        this.lblMontoTotal.innerHTML = `${montoTotal.toFixed(2)}`;
        this.lblPorcDesayuno.innerHTML = `${porcDesayuno.toFixed(2)}`;
        this.lblPorcAlmuerzo.innerHTML = `${porcAlmuerzo.toFixed(2)}`;
        this.lblPorcAmbos.innerHTML = `${porcAmbos.toFixed(2)}`;
        this.lblPorcDescuento.innerHTML = `${porcDescuento.toFixed(2)}`;
    }
}
//# sourceMappingURL=Cl_vComedorPlain.js.map