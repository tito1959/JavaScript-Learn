const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true); //clonamos solo la estructura (true) para su contenido.

$newCard.innerHTML = `<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;

$newCard.classList.add("card");
// $cards.replaceChild($newCard, $cards.children[2]);
// $cards.insertBefore($newCard, $cards.firstElementChild);
// $cards.removeChild($cards.lastElementChild);
document.body.appendChild($cloneCards);