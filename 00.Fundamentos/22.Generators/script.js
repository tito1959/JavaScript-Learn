/*
 * Es una función que permite realizar iteraciones.
 */

function* iterable() {
    yield "Hola1";
    console.log('Hola consola');
    yield "Hola 2";
    console.log("Seguimos con más instrucciones de código");
    yield "Hola 3";
    yield "Hola 4";
}

let iterador = iterable();

for (let y of iterador) {
    console.log(y);
}

const arr = [...iterable()];
console.warn('guardando yields en un arreglo');
console.log(arr);

//------------------------------------------------

function cuadrado(valor) {
    setTimeout(() => {
        return console.log({ valor, resultado: valor * valor }) //Imprimiendo un objeto con valores.
    }, Math.random() * 1000);

    // return {
    //     valor,
    //     resultado: valor * valor
    // }
}

function* generador() {
    console.warn('Inicia Generator');
    yield cuadrado(1);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    yield cuadrado(6);
    console.warn('Termina Generator');
}

let gen = generador();

for (let y of gen) {
    console.log(y);
}