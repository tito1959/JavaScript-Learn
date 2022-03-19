import api from "./helpers/wp_api.js";
import { App } from "./App.js";
import { infiniteScroll } from "./helpers/infinteScroll.js";

document.addEventListener("DOMContentLoaded", () => {
  App();
  infiniteScroll();
});
window.addEventListener("hashchange", () => {
  api.page = 1;
  App();
});
