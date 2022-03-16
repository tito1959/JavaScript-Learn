//----Basics-----

// setTimeout(() => {
//     console.info("Este es un timeout de 1sg");
// }, 1000);

// setInterval(() => {
//     console.info("Este es un interval de 1sg");
// }, 1000);

// setInterval(() => {
//     console.info(new Date().toLocaleTimeString());
// }, 1000);

//Funciones que cancelan las interval y timeout.

let temporizador = setTimeout(() => {
    console.info(new Date().toLocaleTimeString);
}, 1000);

clearTimeout(temporizador);

let interval = setInterval(() => {
    console.info(new Date().toLocaleTimeString());
}, 1000);

clearInterval(interval);