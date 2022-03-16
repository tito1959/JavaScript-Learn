const $card = document.querySelector(".card");
const $card2 = document.getElementById("card");
console.log($card);
console.log($card.className);
console.log($card.classList);

//usamos classlist para agregar nuevas propiedades nuestro selector.

$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45");

//Método toggle, cambia segun el estado true a false o visc.
$card.classList.toggle("rotate-45");

//cambiando la variable css.
$card.classList.replace("rotate-45", "rotate-135");

$card.classList.add("opacity-80", "sepia");

//------------------------------------------------------------
//---- test sin query selector -------------

console.log($card2);
$card2.classList.toggle("rotate-45");
$card2.classList.add("opacity-80", "sepia");