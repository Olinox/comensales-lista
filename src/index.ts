import Cl_mComedor from "./models/Cl_mComedor.js";
import Cl_mComensal from "./models/Cl_mComensal.js";
import Cl_vComedorBootstrap from "./views/Cl_vComedorBootstrap.js";
import Cl_vComensalBootstrap from "./views/Cl_vComensalBootstrap.js";
import Cl_cComedor from "./controllers/Cl_cComedor.js";
import Cl_cComensal from "./controllers/Cl_cComensal.js";

// 1. Instancias únicas
const mComedor = new Cl_mComedor();
const vComensal = new Cl_vComensalBootstrap();
const cComensal = new Cl_cComensal(vComensal);
const vComedor = new Cl_vComedorBootstrap();
const cComedor = new Cl_cComedor(mComedor, vComedor, cComensal);

// 2. Datos (Asegúrate de que los nombres de las propiedades coincidan con el constructor de Cl_mComensal)
const datos = [
    { nombre: "Ana", apellido: "Gil", cedula: "8888", sexo: "F", fechaNac: "2001-06-15", turno: 2 },
    { nombre: "Mery", apellido: "Paz", cedula: "6666", sexo: "F", fechaNac: "2009-07-25", turno: 2 },
    { nombre: "Juan", apellido: "Sanz", cedula: "9999", sexo: "M", fechaNac: "1965-09-20", turno: 2 },
    { nombre: "Paty", apellido: "Ortiz", cedula: "3333", sexo: "F", fechaNac: "1975-05-14", turno: 3 },
    { nombre: "Liz", apellido: "Ramos", cedula: "2222", sexo: "F", fechaNac: "2005-01-03", turno: 2 },
    { nombre: "Raul", apellido: "Mendez", cedula: "5555", sexo: "M", fechaNac: "1995-10-11", turno: 2 },
    { nombre: "Tony", apellido: "Flores", cedula: "7777", sexo: "M", fechaNac: "1964-08-07", turno: 3 },
    { nombre: "Gaby", apellido: "Lopez", cedula: "1111", sexo: "F", fechaNac: "1966-07-19", turno: 2 }
];

// 3. Procesar
datos.forEach(d => {
    mComedor.procesarComensal(new Cl_mComensal(d));

});

// 4. Pintar (Este método debe ser PUBLIC en Cl_cComedor.ts)
cComedor.actualizarReporte();