(() => {

    const $xhr = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))

        .then((json) => {

            json.forEach((el) => {

                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        })
        .catch((err) => {
            console.log(err)
            let message = err.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => { console.log("Esto se ejecutará independientemente del resultado de la promesa Fetch.") });
})();

(() => { //Importante: Las funciones asincronas deben contener la palabra reservada await, que permite ejecutar una acción una vez acabe.

    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();

    async function getData() {

        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await response.json();

            // if (!response.ok) throw new Error("Ocurrió un error al ejecutar los datos.");
            if (!response.ok) throw { status: response.status, statusText: response.statusText }

            json.forEach((el) => {

                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);

        } catch (err) {
            console.log("Estoy en el catch", err);

            let message = err.statusText || "Ocurrió un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        } finally {
            console.log("Fetch Async finally");
        }

    }

    getData();

})();