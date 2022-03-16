/**
 * Podemos manejar tres tipos de eventos, entre ellos directamente desde el HTML,
 * De tipo semántico pero solo se le puede asignar una función
 * y el manejador múltiple con addEventListener.
 * Una función Manejadora de eventos solo puede recibir como parametro una captura de evento.
 */

// ----------------------------- Event Semantic -------------------------
function holaMundo() {
    window.alert("Hola Mundo");
    console.log(event);
}

const $eventSemantic = document.getElementById("eventSemantic");

// $eventSemantic.onclick = holaMundo; //sin parentesis.
//evento semantico en función anonima o arrow function
$eventSemantic.onclick = () => alert("Evento semantico en función anonimá");


//------------------------ Evento multiple -----------------------------
$eventMultiple = document.getElementById("eventMultiple");
$eventMultiple.addEventListener("click", holaMundo); //evento y función a ejecutar
$eventMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo desde Manejador de Eventos Múltiple.");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
}); //evento y función a ejecutar