/*
 * mantener un evento de escucha global e invocar el evento esperado especifico.
 * De esta manerá evitamos el uso reiterado de addEventListenner.
 * Esto tambien permite evitar la propagación de eventos.
 * 
 * agregar eventos antes de que esten el en DOM genera un error, por ello addEventListenner no es capaz de soportarlo
 * para ello debemos hacer uso de la delegación de eventos, esto es importante en contenidos dinamicos y asincronia
 * como cargar elementos html de un api para luego agregar eventos. (no se puede agregar evento a un elemento que no esta cargado aún.)
 */

// const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
//     $linkEventos = document.querySelector(".eventos-flujo a");


function flujoEventos(e) {
    console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`);
    // e.stopPropagation(); //detenemos la propagación de eventos. //no es necesario ya que se delega al elemento padre.
}

document.addEventListener("click", (e) => {
    console.log("click en", e.target);

    //Asignando eventos especificos al evento global.
    if (e.target.matches(".eventos-flujo a")) {
        alert("Hola este es un evento click");
        e.preventDefault();
    }

    if (e.target.matches(".eventos-flujo div")) {
        flujoEventos(e);
    }
});

// $divsEventos.forEach(div => { //forEach de los NodeList
//     //fase Burbuja
//     div.addEventListener("click", flujoEventos);
// });

// $linkEventos.addEventListener("click", (e) => {
//     console.log("Hola este es un evento click");
//     e.preventDefault();
//     e.stopPropagation();
// });