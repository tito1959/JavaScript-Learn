import scrollButton from "./modules/buttonScroll.js";
import slider from "./modules/carrousel.js";
import userDiviceInfo from "./modules/catchDivice.js";
import countdown from "./modules/countdown.js";
import darkTheme from "./modules/darkTheme.js";
import searchFilter from "./modules/filterSearch.js";
import getGeolocation from "./modules/geolocalizacion.js";
import hamburgerMenu from "./modules/hamburger.js";
import speechReader from "./modules/narrador.js";
import responsiveMedia from "./modules/objectResponsive.js";
import { digitalClock, alarm } from "./modules/reloj.js";
import scrollSpy from "./modules/scroll_spy.js";
import draw from "./modules/sorteo.js";
import networkStatus from "./modules/statusNetwork.js";
import { moveBall } from "./modules/teclado.js";
import responsiveTester from "./modules/testResponsive.js";
import contactFormValidation from "./modules/ValidateForm.js";
import smartVideo from "./modules/video_inteligente.js";

const $d = document;

$d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("reloj", "activar-reloj", "desactivar-reloj");
  alarm("resources/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Dec 11, 2022 23:10:20", "Feli Cummpleañios Sebas");
  scrollButton(".scroll-top-btn");
  responsiveMedia("youtube", "(min-width: 1024px)", 'Contenido Móvil <br> <br> <iframe width="100%" src=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7944.915712933057!2d-72.40406404809589!3d5.346866410306513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6b0c4a12c01219%3A0x27ff1fced8e1cc48!2sParque%20La%20Estancia!5e0!3m2!1ses!2sco!4v1644536501155!5m2!1ses!2sco" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" target="_blank" rel="noopener">Ver Mapa</iframe>', 'Contenido Escritorio <br> <br> <iframe width="560" height="315" target="_blank" rel="noopener" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  responsiveTester("responsive-tester");
  userDiviceInfo("#user-device");
  networkStatus();
  getGeolocation("geolocation");
  searchFilter(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidation();
});

// ShortCuts functions
$d.addEventListener("keypress", (e) => {
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode", "stage-dark"); //DOMContentLoaded cargado desde su función.
speechReader();