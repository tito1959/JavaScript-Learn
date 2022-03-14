export default function hamburgerMenu(panelBtn, panel, menuLink) {
  const $d = document;

  /* Delegación de eventos hacia document */
  $d.addEventListener("click", (e) => {

    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      $d.querySelector(panel).classList.toggle("is-active");
      $d.querySelector(panelBtn).classList.toggle("is-active"); //Efecto Boton
    }

    if (e.target.matches(menuLink)) {
      $d.querySelector(panel).classList.remove("is-active");
      $d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}
