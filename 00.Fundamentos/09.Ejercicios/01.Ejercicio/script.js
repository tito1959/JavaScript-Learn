/* 
 *Programa una funcion que cuente el número de caracteres de una 
 * cadena de texto. ej. miFuncion("Hola Mundo") devolverá 10.
 */

function countWord(word) {
    let result = word.length;
    console.log(result);
}

countWord("Hola Mundo");

/*
 *Porgrama una función que recorte un string dependiendo la cantidad deseada.
 */

const cutWord = (word = "", l = undefined) => (typeof word !== "string" ||
        word == "") ?
    console.warn("No es una cadena de texto") :
    console.info(word.slice(0, l));

cutWord("e", 10);

/* 
 *Programa una función que te devuelva el texto recortado según el
 *número de caracteres indicados, ej. miFuncion("Hola que tal, '' ")
 * devolverá ['Hola','que','tal']
 */

function splitWord(word) {
    let result = word.split(" ");
    console.log(result);
}

splitWord("Hola Mundo");


/*
 *Programa una función que repitata un texto X veces, ej.
 *miFuncion("Hola Mundo", 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
 */

function repeatWord(word, n) {
    console.log(word.repeat(n));
}

repeatWord("Hola Mundo", 3);