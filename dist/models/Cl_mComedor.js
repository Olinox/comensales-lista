export default class Cl_mComedor {
    acMontoTotal;
    cntDesayuno;
    cntAlmuerzo;
    cntAmbos;
    cntConDescuento;
    cntTotal;
    acumEdad;
    contComensales;
    acumMontoDescueto;
    // NUEVO: Arreglo para guardar los objetos y mostrarlos en la tabla
    comensales;
    constructor() {
        this.acMontoTotal = 0;
        this.cntDesayuno = 0;
        this.cntAlmuerzo = 0;
        this.cntAmbos = 0;
        this.cntConDescuento = 0;
        this.cntTotal = 0;
        this.acumEdad = 0;
        this.contComensales = 0;
        this.acumMontoDescueto = 0;
        this.comensales = [];
    }
    procesarComensal(c) {
        this.cntTotal++;
        this.acMontoTotal += c.montoAPagar;
        this.acumEdad += c.edad;
        this.contComensales++;
        this.acumMontoDescueto += c.calcDescuento;
        // Guardamos el comensal en la lista
        this.comensales.push(c);
        if (c.turno === 1)
            this.cntDesayuno++;
        else if (c.turno === 2)
            this.cntAlmuerzo++;
        else if (c.turno === 3)
            this.cntAmbos++;
        if (c.tieneDescuento)
            this.cntConDescuento++;
    }
    // ESTE ES EL GETTER QUE TE PIDE EL ERROR
    get getComensales() {
        return this.comensales;
    }
    get montoTotal() { return this.acMontoTotal; }
    get porcDescuento() {
        return this.cntTotal === 0 ? 0 : (this.cntConDescuento / this.cntTotal) * 100;
    }
    get promedioEdad() {
        return this.contComensales === 0 ? 0 : this.acumEdad / this.contComensales;
    }
    porcTurno(turno) {
        if (this.cntTotal === 0)
            return 0;
        let cantidad = 0;
        if (turno === 1)
            cantidad = this.cntDesayuno;
        else if (turno === 2)
            cantidad = this.cntAlmuerzo;
        else if (turno === 3)
            cantidad = this.cntAmbos;
        return (cantidad / this.cntTotal) * 100;
    }
    descuento() {
        return this.acumMontoDescueto;
    }
}
//# sourceMappingURL=Cl_mComedor.js.map