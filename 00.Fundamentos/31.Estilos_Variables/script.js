/*
 * En el caso de que las propiedades css se encuentren en una hoja de estilos externa es necesario
 * que no se deba usar la propiedad style, sinno que debemos usar (getComputedStyle);
 */

const $linkDOM = document.querySelector(".link-bom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "5rem";

//-------------------------------------------------------------------------
// -------------- variables CSS ---------------------

const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor);
console.log(varYellowColor);

//----------------------------------------------------------------------------

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "pink");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);

$html.style.setProperty("--yellow-color", "blue");
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

$body.style.setProperty("color", varYellowColor);