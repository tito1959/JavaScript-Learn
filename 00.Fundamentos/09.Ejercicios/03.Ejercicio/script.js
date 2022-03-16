/*
 *Programa una función que obtenga un número aleatorio entre 501 y 600
 */

const aleatorio = () => console.info(Math.round(Math.random() * 100) + 500)
aleatorio();

/*
 *Programa una función que reciba un número y evalúe si es capicúa o no (Que se lee igual en un sentido que en otro).
 *ej. miFuncion(2002) devolverá -true-  
 */

const capicua = (numero = 0) => {
    if (typeof numero !== "number" || numero === "") return console.warn("El valor ingresado debe ser un número");

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return (numero === alReves) ? console.info(`Si es capicua, Número original ${numero}, Número al reves: ${alReves}`) :
        console.warn(`El valor ingresado: ${numero} no es capicua`);
}

capicua(101);

/*
 *Programa una función que calcule el factorial de un número (El factorial de un número positivo entero n, se define como el producto
 * de todos los números enteros positivos desde 1 hasta n), ej miFuncion(5) devolvera 120. 1*2*3*4*5 = 120
 */

const factorial = (numero = undefined) => {
    if (typeof numero !== 'number') return console.warn("El valor ingresado no es un número");
    if (numero < 1) return console.warn("El valor ingresado debe ser mayor a 0");

    let factorial = 1;

    for (let i = numero; i > 1; i--) {
        factorial *= i;
    }

    return console.info(`El factorial de ${numero} es: ${factorial}`);
}

factorial(5);