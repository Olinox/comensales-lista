/**
 * Enunciado
 */

import Cl_mComedor from "../models/Cl_mComedor.js";
import { I_vComedor } from "../interfaces/I_vComedor.js";
import Cl_cComensal from "./Cl_cComensal.js";

export default class Cl_cComedor {
  private mComedor: Cl_mComedor;
  private vComedor: I_vComedor;
  private cComensal: Cl_cComensal;

  constructor(mComedor: Cl_mComedor, vComedor: I_vComedor, cComensal: Cl_cComensal) {
    this.mComedor = mComedor;
    this.vComedor = vComedor;
    this.cComensal = cComensal;

    this.vComedor.onNuevoComensal(() => this.procesar1Comensal());
    this.actualizarReporte();
  }

  private procesar1Comensal() {
    this.cComensal.solicitarComensal((comensal) => {
      if (comensal !== null) {
        this.mComedor.procesarComensal(comensal);
        this.actualizarReporte();
      }
    });
  }

  // Ahora envía los datos del reporte Y la lista de comensales
  public actualizarReporte() {
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