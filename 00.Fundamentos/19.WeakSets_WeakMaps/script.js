/*
 * weak set y weak map (set debiles, map debiles) -> solo pueden almacenar referencias debiles, osea deben ser de tipo objeto, javascript crea referencias a los objetos y hace uso
 * del recolector de basura, que al ejecutar un proceso limpia sus referencias. cuando una referencia es nula esta se elimina de la memoria.
 */

const ws = new WeakSet();

let valor1 = { 'valor1': 1 };
let valor2 = { 'valor2': 2 };
let valor3 = { 'valor3': 3 };

ws.add(valor1);
ws.add(valor2);

console.log(ws);
//-----------------------------------------
console.warn('metodo has');

console.log(ws.has(valor1));
console.log(ws.has(valor3));

console.warn('delete');
ws.delete(valor2);
console.log(ws);

ws.add(valor2);
ws.add(valor3);

console.log(ws);

//------------------------------------------
/* Demostración de recolector de basura: */

let interval = setInterval(() => {
    console.log(ws);
}, 1000);

setTimeout(() => {
    valor1 = null;
    valor2 = null;
    valor3 = null;
}, 5000);

clearInterval(interval);
//----------------------------

console.error('WeakMap');

const wm = new WeakMap();

let llave1 = [];
let llave2 = [];
let llave3 = [];

//establecemos valores
wm.set(llave1, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
wm.set(llave2, 2);

console.log(wm);

//obtenemos valores
console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));