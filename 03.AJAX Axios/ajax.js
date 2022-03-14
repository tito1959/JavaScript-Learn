(() => {

    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();

    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            // console.log(res);
            let json = res.data;

            json.forEach((el) => {

                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axios.appendChild($fragment);
        })
        .catch((err) => {
            console.log("Estamos en el catch", err.response);

            let message = err.response.statusText || "Ocurrió un error.";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;
        })
        .finally(() => {
            // console.log("Esto se ejecutará independientemente de axios...");
        });
})();

(() => {

    const $axiosAsync = document.getElementById("axios-async"),
        $fragment = document.createDocumentFragment();

    async function getData() {

        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await res.data;

            json.forEach((el) => {

                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axiosAsync.appendChild($fragment);

        } catch (err) {
            console.log("Estamos en el catch", err);

            let message = err.response.statusText || "Ocurrió un error.";
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        } finally {
            console.log("Esto se ejecutará independientemente del try...catch");
        }
    }

    getData();
})();