/*
 * Application programming interface (APIS) mecanismos que interactuan con el navegador.
 * DOM (Document Object Model) ----- BOM (Browser Object Model) ------ 
 */

console.log('******************** Elementos del Documento **********************');

console.log(window.document);
console.log(document);
console.log(document.links);
console.log(document.title);
console.log(document.images);

//------------------------------------------

setTimeout(() => {
    console.log(document.getSelection().toString());
}, 5000);

//-----------------------------------------

document.write("<strong> Hola Mundo Desde El Código </strong>");