/**
 * Programa una función para convertir números de base binaria a decimal y viceversa, ej. miFuncion(100,2) devolverá 4 base 10
 */

const convBinarioToDecimal = (numero = undefined, base = undefined) => {
    let re = /^[0-1]+$/g;
    if (typeof numero !== "number") return console.warn("El campo numero debe ser número");
    if (typeof base !== "number") return console.warn("El campo base debe ser número");

    if (base === 10) return console.info(`${numero} base ${base} = ${numero.toString(2)}`);


    if (!re.test(numero)) return console.warn("El campo debe ser binario");
    if (base === 2) return console.info(`${numero} base ${base} = ${parseInt(numero,base)}`);

}

convBinarioToDecimal(101001, 2);
convBinarioToDecimal(41, 10);

/*
 *Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada. ej. miFuncion(1000,20) 
 *devolverá 800;
 */

const descuentos = (valor = undefined, porcentaje = undefined) => {
    if (typeof valor !== "number" || valor === undefined) return console.warn(`El campo valor debe ser número.`);
    if (typeof porcentaje !== "number" || porcentaje === undefined || !(porcentaje > 0 && porcentaje <= 100)) return console.warn(`Debe ingresar un porcentaje de descuento entre 1 a 100;`);

    let descuento = (valor * porcentaje) / 100;
    let total = valor - descuento;

    return console.info(`El valor: ${valor} con un descuento del ${porcentaje}% Es: ${descuento} y el monto a devolver es: ${total}`);
}

descuentos(3500, 20);


/*
 *Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy.
 *ej. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020);
 */

const calcDate = (años = undefined, meses = undefined, dias = undefined) => {
    if (typeof años !== "number" || typeof meses !== "number" || typeof dias !== "number") return console.warn("Debe ingresar números.");
    if (meses > 12 || meses < 0 && dias > 31 || dias < 0) return console.warn("Debe ingresar un mes valido y un dia valido.");

    const date1 = new Date(`${años},${meses},${dias}`);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));

    console.log(diffDays + " years");

}

calcDate(1996, 12, 11);