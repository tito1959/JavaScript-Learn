window.addEventListener("resize", (e) => {
    console.clear();
    console.log("***** Evento Resize *******");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
});

window.addEventListener("scroll", (e) => {
    console.clear();
    console.log("******** Evento Scroll ********");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("load", (e) => { //respuesta lenta, espera a que todos sus elementos esten completos.
    // console.clear();
    console.log("******** Evento Load ********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => { //buena opcion para recibir respuestas una vez el DOM se cargue.
    // console.clear();
    console.log("******** Evento DOMContentLoaded ********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});