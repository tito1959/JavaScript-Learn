/*
 *Programa una función que invierta las palabras de una cadena de texto,
 *miFuncion("Hola Mundo") devolverá "odnuM aloH"
 */

const invertirCadena = (string = "") =>
    typeof string !== "string" || string === "" ?
    console.warn("No es una cadena de texto valida") :
    console.info(string.split("").reverse().join(""));

invertirCadena("Hola Mundo");

/*Programa una función para contar el número de veces que se repite una palabra
 *en un texto largo ej. miFunction("Hola mundo adios mundo", "mundo") devolverá 2.
 */

const txtCadena = (cadena = "", txt = "") => {
    if (typeof cadena !== "string" || cadena === "")
        return console.warn("Debe ingresar un texto");
    if (typeof txt !== "string" || txt === "")
        return console.warn("Debe igresar una palabra a evaluar");

    let i = 0,
        contador = 0;

    while (i !== -1) {
        i = cadena.indexOf(txt, i); //si 

        if (i !== -1) {
            i++;
            contador++;
        }
    }

    return console.info(`La palabra ${txt} se repite ${contador} veces`);
};

txtCadena("Hola Mundo", "Mundo");

/*
 *Programa una función que valide si una palabra o frase dada, es un palíndromo (se lee igual
 *en un sentido que el otro). ej. miFuncion("Salas") devolverá true
 */

const palindromo = (palabra = "") => {
    if (typeof palabra !== "string" || palabra === "") return console.warn("Debe ingresar una palabra valida");

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return (palabra === alReves) ?
        console.info(`Si es palindromo, Palabra original ${palabra}, Palbra al revés ${alReves}`) :
        console.info(`No es palindromo, Palabra original ${palabra}, Palbra al revés ${alReves}`)

};

palindromo("salon");

/*
 *Programa una función que elimine cierto patrón de caracteres de un texto dado.
 *ej. miFuncion("xyz1, xyz2, yyz3, yyz4, yyz5, xyz") devolverá "1,2,3,4 y 5"
 */

const filtrarCaracteres = (texto = "", patron = "") => {

    if (typeof texto !== "string" || texto === "") return console.log("Debe ingresar un texto.");
    if (typeof patron !== "string" || patron === "") return console.warn("Debe ingresar un patrón para el texto valido");

    console.info(texto.replace(new RegExp(patron, "ig"), ""));

};

filtrarCaracteres("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz");