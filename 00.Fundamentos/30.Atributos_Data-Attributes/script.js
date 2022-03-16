/*
 * HTML5 está diseñado de forma tal que sea fácil extender los datos asociados a un elemento en particular sin necesidad de
 que tengan un significado definido. Los atributos data-*  permiten almacenar información adicional sobre un elemento HTML 
 cualquiera sin tener que recurrir a artilugios tales como la utilización de atributos no estándar, propiedades adicionales 
 en el DOM o Node.setUserData().
 */

console.log(document.documentElement.lang); //representa una etiqueta html para obtener su valor.
console.log(document.documentElement.getAttribute("lang")); //
console.log(document.querySelector(".link-bom").href); //
console.log(document.querySelector(".link-bom").getAttribute("href")); //

//---------------------------------------------------------------------------
console.log("*************** Cambiar Atributos HTML *******************");

document.documentElement.lang = "ru";
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang", "es-CO");
console.log(document.documentElement.lang);

//----------------------------------------------------------------------------
//almacenando en constantes preferiblemente y con signo dolar, los elementos del DOM.

const $linkDOM = document.querySelector(".link-bom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener"); //para evitar que sea insegura un link nueva pestaña, hace una no dependencia entre el link y la web-
$linkDOM.setAttribute("href", "https://www.google.com");

//----------------------------------------------------------------------------
//eliminar elementos de el HTML

console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//------------------------------------------------------------------------------
//Data-Attributes.

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset); // se alamacenan en una coleccion llamada dataset. de tipo MAP
console.log($linkDOM.dataset.description);

$linkDOM.setAttribute("data-description", $linkDOM.dataset.id); //asignar nuevo valor al data attribute. ya sea un string u otro parametro.
$linkDOM.dataset.description = "Suscripción al canal";
console.log($linkDOM.dataset.description);