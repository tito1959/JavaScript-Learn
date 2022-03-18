import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";

export async function Router() {
  let { hash } = location,
    $main = document.getElementById("main");
  $main.innerHTML = null;

  function loaderOff() {
    document.querySelector(".loader").style.display = "none";
  }

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      callBackSuccess: (posts) => {
        let html = "";

        console.log(posts);

        posts.forEach((post) => {
          html += PostCard(post);
        });

        loaderOff();
        $main.innerHTML = html;
      },
    });
  } else if (hash === "#/search") {
    $main.innerHTML = "<h2>Sección del Buscador.</h2>";
  } else if (hash === "#/contacto") {
    $main.innerHTML = "<h2>Sección del contacto.</h2>";
    console.log(api.POST);
  } else {
    let urls = window.location.hash.slice(2);

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
