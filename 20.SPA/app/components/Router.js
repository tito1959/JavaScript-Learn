import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";

export async function Router() {
  let { hash } = location,
    search = "",
    $main = document.getElementById("main");

  $main.innerHTML = null;

  document.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) return false;

    if (e.target.matches(".search-form")) {
      e.preventDefault();

      search = document.querySelector("input").value;
      localStorage.setItem("wpSearch", search);
      location.hash = `#/search?search=${search}`;
    }
  });

  function loaderOff() {
    document.querySelector(".loader").style.display = "none";
  }

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      callBackSuccess: (posts) => {
        let html = "";

        // console.log(posts);

        posts.forEach((post) => {
          html += PostCard(post);
        });

        loaderOff();
        $main.innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");
    if (!query) {
      document.querySelector(".loader").style.display = "none";
      return false;
    }

    await ajax({
      url: `${api.SEARCH}${query}`,
      callBackSuccess: (search) => {
        let html = "";

        if (search.length <= 0) {
          html = `
        <p class ="error">
          No existen resultados de la búsqueda para el término
          <mark>${query}</mark>
        </p>
        `;
        } else {
          search.forEach((post) => (html += SearchCard(post)));
        }

        $main.innerHTML = html;
      },
    });
  } else if (hash === "#/contacto") {
    $main.innerHTML = "<h2>Sección del contacto.</h2>";
    console.log(api.POST);
  } else {
    let urls = hash.slice(2);

    await ajax({
      url: `${api.POST}?slug=${urls}`,
      callBackSuccess: (post) => {
        console.log(post[0]);
        $main.innerHTML = Post(post[0]);
      },
    });
  }

  loaderOff();
}
