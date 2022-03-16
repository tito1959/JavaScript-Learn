//Symbol se mantiene de manera privada y crea una referencia única; se declara literalmente Symbol();
//Symbol crea un espacio en memoria unico y una identidad unica.

let id = "Hola";
let id2 = "Hola";

let symbol = Symbol("descripcion");
let symbol2 = Symbol("descripcion");

// console.log(id === id2);
// console.log(symbol === symbol2);

const NOMBRE = Symbol();
const SALUDAR = Symbol();
const OBJETOS = Symbol();


// ------ objetos con symbol ------
const PERSONA = {
        [NOMBRE]: "Jon"
    }
    // --------------------------------

console.info(PERSONA);

PERSONA.NOMBRE = "Johan Sebastian";
// console.info(PERSONA.NOMBRE);
// console.info(PERSONA[NOMBRE]);

PERSONA[SALUDAR] = function() {
    console.log(`Función Hola symbolic`);
}

PERSONA[OBJETOS] = {
    name: "symbol"
}


PERSONA[SALUDAR]();

for (let propiedad in PERSONA) {
    console.log("ciclo for in");
    console.log(propiedad);
    console.log(PERSONA[propiedad]);
    console.log("ciclo end for in");
}
console.log("Console log:")
console.log(PERSONA);

console.log("Get Own Property:")
console.log(Object.getOwnPropertySymbols(PERSONA));