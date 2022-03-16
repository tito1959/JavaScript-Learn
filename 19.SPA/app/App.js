import api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Title } from "./components/Title.js";
import { Loader } from "./components/Loader.js";

export function App() {
  const $root = document.getElementById("root");

  $root.appendChild(Title());
  $root.appendChild(Loader());

  //document.getElementById("root").innerHTML = `<h1>Bienvenidos a mi primer SPA con VanillaJS</h1>`;

  ajax({
    url: api.POSTS,
    callBackSuccess: (posts) => {
      console.log(posts);
    },
  });

  ajax({
    url: api.CATEGORIES,
    callBackSuccess: (categories) => {
      console.log(categories);
    },
  });
}
