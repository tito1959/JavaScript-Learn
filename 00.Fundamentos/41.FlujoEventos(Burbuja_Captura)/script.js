const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
}

$divsEventos.forEach(div => { //forEach de los NodeList
    //fase Burbuja
    // div.addEventListener("click", flujoEventos); 
    // div.addEventListener("click", flujoEventos, false);
    //fase Captura
    // div.addEventListener("click", flujoEventos, true);
    //También podemos pasar objetos.
    div.addEventListener("click", flujoEventos, {
        capture: false,
        once: true
    });
});