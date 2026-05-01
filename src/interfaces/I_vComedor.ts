export interface I_vComedor {
  onNuevoComensal(callback: () => void): void;
  reportar(datos: {
    montoTotal: number;
    porcDescuento: number;
    porcDesayuno: number;
    porcAlmuerzo: number;
    porcAmbos: number;
    promedioEdad: number;
    descuento: number;
    comensales: any[]; // <--- Verifica que esta línea exista
  }): void;
}