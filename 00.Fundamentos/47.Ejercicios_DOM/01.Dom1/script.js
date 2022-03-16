/*
 * Hamburguesa Menu
 * Reloj App
 */

import hamburgerMenu from "./modules/menu_hamburguer.js";
import { digitalClock, alarm } from "./modules/reloj.js";

const $d = document;

$d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
});