const $figure = document.createElement('figure'),
    $img = document.createElement('img'),
    $figcaption = document.createElement('figcaption'),
    $figcaptionText = document.createTextNode('Animals'),
    $cards = document.querySelector('.cards'),
    $figure2 = document.createElement("figure");

//agregando los elementos con el método appendChild(); este es uno de los métodos más importantes
//en la programación web usando el DOM. El método inserta un nuevo nodo dentro de la estructura DOM
// de un documento, y es la segunda parte del proceso central uno-dos, crear y añadir para construir paginas web
//a base de programación.

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Aniamls");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

//agregar multiple data html dinamicamente sin ajax o fetch.
const estaciones = ["Privamera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del año.</h3>");
document.body.appendChild($ul);

//recorriendo los elementos de las estaciones e insertando HTML
estaciones.forEach(el => {
    const $li = document.createElement('li');
    $li.textContent = el;
    $ul.appendChild($li);
});

//lista de continentes
const continentes = ["África", "América", "Asia", "Europa", "Oceanica"],
    $ul2 = document.createElement('ul');

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);

//Inicializamos con valores vacios nuestro innerHTML
$ul2.innerHTML = "";
continentes.forEach(el => {
    $ul2.innerHTML += `<li> ${el} </li>` //se debe concatenar cada recorrido.
});

//fragmentos dinámicos. mejor opcion para insertar contenido dinamico.
const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Deciembre",
    ],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
}); //No podemos usar el innerHTML

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);