const $main = document.querySelector("main");

const getHTML = (options) => {
    let { url, success, error } = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return
        if (xhr.status >= 200 && xhr.status <= 299) {

            let html = xhr.responseText;
            success(html);
        } else {
            let message = xhr.statusText || "Ocurrió un error";
            error(`Error ${xhr.status}: ${message}`);
        }
    });

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "text/html;charset=utf-8");
    xhr.send();
}

/*--Dom Loader--*/
document.addEventListener("DOMContentLoaded", (e) => {
    getHTML({
        url: "assets/home.html",
        success: (html) => $main.innerHTML = html, //agrega la respuesta html al documento main.
        error: (error) => $main.innerHTML = `<h1>${error}</h1>`
    });
});

/*--Events Link Navigator--*/
document.addEventListener("click", (e) => {
    if (e.target.matches(".menu a")) {
        e.preventDefault();

        getHTML({
            url: e.target.href,
            success: (html) => $main.innerHTML = html, //agrega la respuesta html al documento main.
            error: (error) => $main.innerHTML = `<h1>${error}</h1>`
        });
    }
});
