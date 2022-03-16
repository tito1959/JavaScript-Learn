const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.childNodes);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);

console.log($cards.closest("div")); // es un método que busca el ancestro, el padre más cercano
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); // el padre mas cercano del elemento n°3