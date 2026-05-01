import { I_vComedor } from "../interfaces/I_vComedor.js";

export default class Cl_vComedorBootstrap implements I_vComedor {
  private lblMontoTotal: HTMLElement;
  private lblPorcDesayuno: HTMLElement;
  private lblPorcAlmuerzo: HTMLElement;
  private lblPorcAmbos: HTMLElement;
  private lblPorcDescuento: HTMLElement;
  private lblPromedioEdad: HTMLElement;
  private btNuevoComensal: HTMLButtonElement;
  private tablaComensales: HTMLElement;
  private lblDescuento: HTMLElement;

  constructor() {
    this.btNuevoComensal = document.getElementById("body_btNuevoComensal") as HTMLButtonElement;
    this.lblMontoTotal = document.getElementById("body_lblMontoTotal") as HTMLElement;
    this.lblPorcDesayuno = document.getElementById("body_lblPorcDesayuno") as HTMLElement;
    this.lblPorcAlmuerzo = document.getElementById("body_lblPorcAlmuerzo") as HTMLElement;
    this.lblPorcAmbos = document.getElementById("body_lblPorcAmbos") as HTMLElement;
    this.lblPorcDescuento = document.getElementById("body_lblPorcDescuento") as HTMLElement;
    this.lblPromedioEdad = document.getElementById("body_lblPromedioEdad") as HTMLElement;
    this.tablaComensales = document.getElementById("body_tablaComensales") as HTMLElement;
    this.lblDescuento = document.getElementById("body_lblDescuento") as HTMLElement;
  }

  onNuevoComensal(callback: () => void): void {
    this.btNuevoComensal.onclick = callback;
  }

  /**
   * Actualiza los reportes y reconstruye la tabla con alineación corregida
   */
  reportar({ montoTotal, porcDescuento, porcDesayuno, porcAlmuerzo, porcAmbos, promedioEdad, comensales, descuento }: any): void {
    // 1. Actualizar etiquetas de resultados
    this.lblMontoTotal.innerHTML = `$${montoTotal.toFixed(2)}`;
    this.lblPorcDesayuno.innerHTML = `${porcDesayuno.toFixed(2)}%`;
    this.lblPorcAlmuerzo.innerHTML = `${porcAlmuerzo.toFixed(2)}%`;
    this.lblPorcAmbos.innerHTML = `${porcAmbos.toFixed(2)}%`;
    this.lblPorcDescuento.innerHTML = `${porcDescuento.toFixed(2)}%`;
    this.lblPromedioEdad.innerHTML = `${promedioEdad.toFixed(2)}%`;
    this.lblDescuento.innerHTML = `$${descuento.toFixed(2)}`;


    // 2. Llenar la tabla dinámica
    if (this.tablaComensales) {
      this.tablaComensales.innerHTML = ""; // Limpiar tabla

      comensales.forEach((c: any) => {
        const fila = document.createElement("tr");
        
        // Configuración de visualización del turno
        let nombreTurno = "";
        let colorBadge = "";
    
        
        switch (c.turno) {
          case 1:
            nombreTurno = "Desayuno";
            colorBadge = "bg-warning text-dark";
            break;
          case 2:
            nombreTurno = "Almuerzo";
            colorBadge = "bg-success";
            break;
          case 3:
            nombreTurno = "Ambos";
            colorBadge = "bg-primary";
            break;
        }
        const textoDescuento = c.tieneDescuento ? "SÍ" : "NO";
        const claseBadge = c.tieneDescuento ? "bg-info" : "bg-secondary";

        // Definición de celdas con alineación exacta para evitar desfases
        fila.innerHTML = `
          <td>${c.cedula}</td>
          <td>${c.nombre} ${c.apellido}</td>
          <td class="text-center">${c.sexo}</td>
          <td class="text-center">${c.edad}</td>
          <td class="text-center">
            <span class="badge ${colorBadge}">${nombreTurno}</span>
          </td>
          
          <td class="text-end">$${c.costoBase.toFixed(2)}</td> 
          <td class="text-end">
          <span class="badge ${claseBadge}">${textoDescuento}</span>
          </td>
          <td class="text-end"> <strong>$${c.montoAPagar.toFixed(2)}
          </strong> </td>
        `;
        
        this.tablaComensales.appendChild(fila);
      });
    }
  }
}