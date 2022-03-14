const $shows = document.getElementById("shows"),
  $template = document.getElementById("show-template").content,
  $fragment = document.createDocumentFragment();

document.addEventListener("keypress", async (e) => {
  if (e.target.matches("#search")) {
    if (e.key === "Enter") {
      try {
        $shows.innerHTML = `<img class="loader" src="resources/loader.svg" alt="Cargando...">`;
        let query = e.target.value.toLowerCase(),
          api = `http://api.tvmaze.com/search/shows?q=${query}`,
          response = await fetch(api),
          json = await response.json();

        if (!response.ok) throw { status: response.status, statusText: response.statusText };
        if (json.length === 0) {
          $shows.innerHTML = `<h2>No existen resultados de shows para el criterio de busqueda: <mark>${query}</mark></h2>`;
        } else {
          json.forEach((el) => {
            $template.querySelector("h3").textContent = el.show.name;
            $template.querySelector("div").innerHTML = el.show.summary ? el.show.summary : "Sin descripción.";
            $template.querySelector("img").src = el.show.image
              ? el.show.image.medium
              : "http://static.tvmaze.com/images/no-img-portrait-text.png";
            $template.querySelector("img").alt = el.show.name;
            $template.querySelector("img").style.maxWidth = "100%";
            $template.querySelector("a").href = el.show.url ? el.show.url : "#";
            $template.querySelector("a").target = el.show.url ? "_blank" : "_self";
            $template.querySelector("a").textContent = el.show.url ? "Ver más..." : "";
            let $clone = document.importNode($template, true);
            $fragment.appendChild($clone);
          });
          $shows.innerHTML = "";
          $shows.appendChild($fragment);
        }
      } catch (error) {
        console.log(error);
        let message = error.statusText || "Ocurrió un error";
        $shows.innerHTML = `<p>Error: ${error.status} : ${message}</p>`;
      }
    }
  }
});
