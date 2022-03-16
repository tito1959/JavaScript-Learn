const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");



console.log($divsEventos);

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
    e.stopPropagation(); //detenemos la propagación de eventos.
}

$divsEventos.forEach(div => { //forEach de los NodeList
    //fase Burbuja
    div.addEventListener("click", flujoEventos);
});

$linkEventos.addEventListener("click", (e) => {
    console.log("Hola este es un evento click");
    e.preventDefault();
    e.stopPropagation();
});