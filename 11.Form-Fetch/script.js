const d = document;

function contactForm() {

  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

  $inputs.forEach(input => {
    const $span = d.createElement("span");
    $span.id = input.name; //agregamos como id el atributo name de cada input.
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {

    if (e.target.matches(".contact-form [required]")) {

      let $input = e.target, //Identifica el selector al cual interactua.
        $pattern = $input.pattern || $input.dataset.pattern; //dataset contiene todos los data atributes de una etiqueta.

      if ($pattern && $input.value !== "") { //Si el input tiene pattern y es diferente de vacio.

        let regex = new RegExp($pattern);
        return !regex.exec($input.value) //si regex no valida-
          ? d.getElementById($input.name).classList.add("is-active") //capturamos el id del span que creamos previamente. 
          : d.getElementById($input.name).classList.remove("is-active");
      }

      if (!$pattern) {

        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {

    e.preventDefault();
    alert("Enviando Formulario");

    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    fetch("https://formsubmit.co/ajax/sebasti1959@hotmail.com", {
      method: "POST",
      body: new FormData(e.target)
    })
      .then(response => response.ok ? response.json() : Promise.reject(response))
      .then(json => {
        console.log(json);
        $loader.classList.add("none");
        $response.classList.remove("none");
        $response.innerHTML = `<p>${json.message}</p>`;
        $form.reset();
      })
      .catch(error => {
        console.log(error);
        let message = error.statusText || "Ocurrió un error.";
        $response.innerHTML = `<p>${error.status}:${message}</p>`;
      })
      .finally(setTimeout(() => {
        $response.classList.add("none")
      }, 3000));
  });
}

contactForm();