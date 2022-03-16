/*
 *Programar una función que determine si un número es primo (Aquel que solo es divisible por si mismo y 1)
 *o no. ej. miFuncion(7) devolverá true 
 */

const numPrimo = (numero = undefined) => {
    if (typeof numero !== "number" || numero === "") return console.warn("Debe ingresar un número valido");
    if (numero < 2) return console.warn("Debe ingresar un número mayor a 2");

    let divisible = false;

    for (let i = 2; i < numero; i++) {
        if ((numero % i) === 0) { // si numero nunca entra al ciclo no es primo, para que esto suceda numero debe ser modulo 0.
            divisible = true;
            break;
        }
    }
    return (divisible !== false) ? console.log(`El número ${numero}, No es primo`) : console.log(`El número ${numero}, Si es primo`)
}

numPrimo(19);

/*
 * Programa una funcion que determine si un número es par o impar, ej. miFuncion(29) devolverá impar. 
 */

const numPar = (numero = undefined) => {
    if (typeof numero !== "number" || numero === "") return console.warn("Debe ingresar un número valido");

    return ((numero % 2) === 0) ? console.info(`El número ${numero} es Par`) : console.info(`El número ${numero} es Impar`);

}
numPar(3);

/*
 *Programa una funcion para convertir grados celcius a Farenheit y viceversa, ej. miFuncion(0,"C") devolverá 32°F.
 */

const convGrados = (grados = undefined, unidad = undefined) => {
    if (typeof grados !== "number" || grados === "") return console.warn("Debe ingresar una cifra valida.");
    if (typeof unidad !== "string" || unidad === "") return console.warn(`Debe ingresar "C" o "F" para realizar la conversión.`);
    if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de la unidad no reconocido."); //Expresion regular para determinar si existe F / C


    if (unidad === "C") {
        let operacion = Math.round(grados * (9 / 5) + 32);
        return console.info(`Los ${grados}°C = ${operacion}°F`);
    } else if (unidad === "F") {
        let operacion = Math.round((grados - 32) * (5 / 9));
        return console.info(`Los ${grados}°F = ${operacion}°C`);
    }

}

convGrados(32, "F");