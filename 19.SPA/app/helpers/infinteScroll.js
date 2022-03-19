import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js";

export async function infiniteScroll() {
  let query = localStorage.getItem("wpSearch"),
    apiUrl,
    Component;

  window.addEventListener("scroll", async (e) => {
    let { scrollTop, clientHeight, scrollHeight } = document.documentElement,
      { hash } = window.location;

    if (scrollTop + clientHeight >= scrollHeight) {
      api.page++;

      if (!hash || hash === "#/") {
        apiUrl = `${api.POSTS}&page=${api.page}`;
        Component = PostCard;
      } else if (hash.includes("#/search")) {
        apiUrl = `${api.SEARCH}${query}&page=${api.page}`;
        Component = SearchCard;
      } else {
        return false;
      }

      document.querySelector(".loader").style.display = "block";

      await ajax({
        url: apiUrl,
        callBackSuccess: (posts) => {
          let html = "";
          posts.forEach((post) => {
            html += Component(post);
            document.getElementById("main").insertAdjacentHTML("beforeend", html);

            document.querySelector(".loader").style.display = "none";
          });
          console.log(api.page, apiUrl);
        },
      });
    }

    //console.log(scrollTop, clientHeight, scrollHeight, hash);
  });
}
