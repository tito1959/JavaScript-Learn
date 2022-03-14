const d = document, w = window, n = navigator;

export default function networkStatus() {
    /* navigator.status devuelve true o false si esta conectado. */

    const isOnline = () => {
        const $div = d.createElement("div");

        if (n.onLine) {
            $div.textContent = "Conexión Reestablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");



        } else {
            $div.textContent = "Conexión Perdida";
            $div.classList.remove("online");
            $div.classList.add("offline");

        }
        d.body.insertAdjacentElement("afterbegin", $div); //agrega el elemento dentro del body.
        setTimeout(() => {
            $div.classList.add("hidden");
        }, 2000);
    }

    w.addEventListener("online", (e) => {
        isOnline();
    });
    w.addEventListener("offline", (e) => {
        isOnline();
    });
}