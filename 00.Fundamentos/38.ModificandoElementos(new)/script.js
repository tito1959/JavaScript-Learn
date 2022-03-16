/*
 * .insertAdjacent - .insertAdjacentElement(position, el) - .insertAdjacentHTML(position, html)
 * insertAdjacentText(position, text)
 * 
 * Posiciones:
 * beforebegin (Hermano anterior)
 * afertbegin (Primer Hijo)
 * beforeend (Último Hijo) 
 * afertend (Hermano Siguiente)
 */

const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

let $contentCard = `<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
    
    `;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

// $cards.insertAdjacentElement("beforebegin", $newCard);
// $cards.insertAdjacentElement("afterbegin", $newCard);
// $cards.insertAdjacentElement("beforeend", $newCard);
// $cards.insertAdjacentElement("afterend", $newCard);
// $cards.children[2].insertAdjacentElement("afterend", $newCard);

// $cards.prepend($newCard); //incluye la card como primer hijo
// $cards.append($newCard); //incluye la card como ultima
// $cards.before($newCard); //incluye la card como anterior hijo
$cards.after($newCard); //incluye la card como hermano posterior al cards.