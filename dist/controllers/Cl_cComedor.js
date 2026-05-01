/**
 * Enunciado
 */
export default class Cl_cComedor {
    mComedor;
    vComedor;
    cComensal;
    constructor(mComedor, vComedor, cComensal) {
        this.mComedor = mComedor;
        this.vComedor = vComedor;
        this.cComensal = cComensal;
        this.vComedor.onNuevoComensal(() => this.procesar1Comensal());
        this.actualizarReporte();
    }
    procesar1Comensal() {
        this.cComensal.solicitarComensal((comensal) => {
            if (comensal !== null) {
                this.mComedor.procesarComensal(comensal);
                this.actualizarReporte();
            }
        });
    }
    // Ahora envía los datos del reporte Y la lista de comensales
    actualizarReporte() {
        this.vComedor.reportar({
            montoTotal: this.mComedor.montoTotal,
            porcDescuento: this.mComedor.porcDescuento,
            porcDesayuno: this.mComedor.porcTurno(1),
            porcAlmuerzo: this.mComedor.porcTurno(2),
            porcAmbos: this.mComedor.porcTurno(3),
            promedioEdad: this.mComedor.promedioEdad,
            // NUEVO: Pasamos el arreglo de comensales a la vista
            comensales: this.mComedor.getComensales,
            descuento: this.mComedor.descuento()
        });
    }
}
//# sourceMappingURL=Cl_cComedor.js.map