const d = document,
  ls = localStorage;

export default function darkTheme(btn, classDark) {

  const $themeBtn = d.querySelector(btn),
    $selector = d.querySelectorAll("[data-dark]"); //Especifica bajo la etiqueta data-dark para aplicar a los selectores que deseamos aplicar estilos (dark mode)

  let moon = "🌑",
    sun = "☀️";

  const darkMode = () => {

    $selector.forEach((el) => el.classList.add(classDark)); //recorre todos los data- para asignar la class {dark-theme-btn}
    $themeBtn.textContent = sun;
    ls.setItem("theme", "dark");
  };

  const lightMode = () => {

    $selector.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light");
  };

  d.addEventListener("click", (e) => {

    if (e.target.matches(btn)) {

      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {

    //si no existe la variable theme en el ls.
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");

    if (ls.getItem("theme" === "light")) lightMode();

    if (ls.getItem("theme") === "dark") darkMode();
  });
}
