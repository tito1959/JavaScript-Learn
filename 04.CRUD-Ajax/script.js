/*--Selectores HTML -- */
const $table = document.querySelector(".crud-table"),
    $form = document.querySelector(".crud-form"),
    $title = document.querySelector(".crud-title");

/* --- Template Generar CRUD */
/* -- Conexion XHR  (GET/POST/PUT/DELETE)-- */
const ajax = (options) => {
    let { url, method, success, error, data } = options; //Destructuración.
    const xhr = new XMLHttpRequest();

    /* -- Conexión xhr */
    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            success(json); //funcion succes.
        } else {
            let message = xhr.statusText || "Ocurrió un error";
            error(`Error ${xhr.status}:${message}`);
        }
    });

    xhr.open(method || "GET", url) //operador or
    xhr.setRequestHeader("Content-type", "application/json;charset=utf-8"); //Valor especificado a la cabecera: json
    xhr.send(JSON.stringify(data));
}
/*-- Operación Get Mobs -- */
const getAll = () => {
    ajax({
        method: "GET",
        url: "http://localhost:5555/mobs",
        success: (res) => {
            console.log(res)

            res.forEach(el => {
                const template = `
                <tr>
                    <td>${el.id}</td>
                    <td>${el.nombre}</td>
                    <td>${el.color}</td>
                    <td>${el.drop}</td>
                    <td>
                        <button class="edit" data-id="${el.id}" data-nombre="${el.nombre}" data-color="${el.color}" data-drop="${el.drop}">Editar</button>
                        <button class="delete" data-id="${el.id}">Eliminar</button>
                    </td>
                </tr>`

                $table.querySelector("#table-output").insertAdjacentHTML("beforeend", template);
            });
        },
        error: (error) => {
            console.error(error);
            $table.insertAdjacentHTML("afterend", `<p><b>${error}</b></p>`)
        },
        data: null
    });
}

/*-- Recupera Toda la Data --*/
document.addEventListener("DOMContentLoaded", getAll);

/* --Submit Button */
document.addEventListener("submit", (e) => {
    if (e.target === $form) {
        //Evaluamos si se envia una actualización o una creación.
        if (!e.target.id.value) {
            //Crear POST
            if (e.target.nombre.value !== "" && e.target.color !== "") {
                ajax({
                    url: "http://localhost:5555/mobs",
                    method: "POST",
                    success: (res) => getAll(),
                    error: () => $form.insertAdjacentHTML("afterend", `<p><b>${error}</p></b>`),
                    data: {
                        nombre: e.target.nombre.value,
                        color: e.target.color.value,
                        drop: e.target.drop.value
                    }
                });
            } else {
                console.log("Error los datos deben ser llenados.");
            }
        } else {
            //Crear PUT
            if (e.target.nombre.value !== "" && e.target.color !== "") {
                ajax({
                    url: `http://localhost:5555/mobs/${e.target.id.value}`,
                    method: "PUT",
                    success: (res) => getAll(),
                    error: () => $form.insertAdjacentHTML("afterend", `<p><b>${error}</p></b>`),
                    data: {
                        nombre: e.target.nombre.value,
                        color: e.target.color.value,
                        drop: e.target.drop.value
                    }
                });
            } else {
                console.log("Error los datos deben ser llenados.");
            }
        }

    }

});

/*-- Agregar Interfaz Editar --*/
document.addEventListener("click", (e) => {
    if (e.target.matches(".edit")) {
        $title.textContent = "Editar Mob";
        $form.nombre.value = e.target.dataset.nombre;
        $form.color.value = e.target.dataset.color;
        $form.drop.value = e.target.dataset.drop;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(`Estas seguro de eliminar el id: ${e.target.dataset.id}?`);
        if (isDelete) {
            ajax({
                url: `http://localhost:5555/mobs/${e.target.dataset.id}`,
                method: "DELETE",
                success: (res) => getAll(),
                error: () => $form.insertAdjacentHTML("afterend", `<p><b>${error}</b></p>`)
            });

            console.log(e.target.dataset.id);
        }
    }
});