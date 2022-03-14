const d = document;

export default function searchFilter(input, selector) {

    d.addEventListener("keyup", (e) => {

        if (e.key === "Escape") e.target.value = "";

        if (e.target.matches(input)) {

            d.querySelectorAll(selector).forEach(el =>
                el.textContent.toLowerCase().includes(e.target.value) //devuelve true o false si incluye el valor.
                    ? el.classList.remove("filter")
                    : el.classList.add("filter"));
        }
    });
}