const $main = document.querySelector("main"),
  $links = document.querySelector(".links");

let url = "https://pokeapi.co/api/v2/pokemon/";

async function loadPokemons(url) {
  try {
    $main.innerHTML = `<img class="loader" src="./resources/loader.svg" alt="Cargando...">`;

    /* Solicitud Fetch asincrona */
    let response = await fetch(url),
      json = await response.json(),
      $template = " ",
      $prevLink,
      $nextLink;

    if (!response.ok) throw { status: response.status, statusText: response.statusText };

    for (let i = 0; i < json.results.length; i++) {
      //console.log(json.results[i]);
      try {
        let response = await fetch(json.results[i].url),
          pokemon = await response.json();
        console.log(response, pokemon);

        if (!response.ok) throw { status: response.status, statusText: response.statusText };

        $template += `
        <figure>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <figcaption>${pokemon.name}</figcaption>
        </figure>
        `;
      } catch (error) {
        console.log(error);
        let message = error.statusText || "Ocurrió un error";
        $template += `
        <figure>
          <figcaption>Error ${error.status}: ${message}</figcaption>
        </figure>
        `;
      }
    }

    $main.innerHTML = $template;

    /* Navigation Page */
    $prevLink = json.previous ? `<a href="${json.previous}"> <== </a>` : "";
    $nextLink = json.next ? `<a href="${json.next}"> ==> </a>` : "";
    $links.innerHTML = $prevLink + " " + $nextLink;
    /* close nav page */
  } catch (error) {
    console.log(error);
    let message = error.statusText || "Ocurrió un error";
    $main.innerHTML = `<p>Error ${error.status}: ${message}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", (e) => loadPokemons(url));
document.addEventListener("click", (e) => {
  if (e.target.matches(".links a")) {
    e.preventDefault();
    loadPokemons(e.target.getAttribute("href"));
  }
});
