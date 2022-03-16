const iterable = "Hola Mundo";
const iterable2 = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 8, 9]);

/* Accedemos al iterador del iterable.*/
const iterador = iterable[Symbol.iterator]();
const iterador2 = iterable2[Symbol.iterator]();
/* El método next permite determinar si la iteración ha terminado. */


console.log(iterable);
console.log(iterador);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

console.error("Iterador String");

let next = iterador.next();
while (!next.done) {
    console.log(next.value);
    next = iterador.next();
}

console.error("Iterador tipo Set");

let next2 = iterador2.next();
while (!next2.done) {
    console.log(next2.value);
    next2 = iterador2.next();
}