/*--Selectores HTML -- */
const $table = document.querySelector(".crud-table"),
    $form = document.querySelector(".crud-form"),
    $title = document.querySelector(".crud-title");

/*--GET--*/
const getAll = async () => {
    try {
        let response = await axios.get("http://localhost:5555/mobs"),
            json = await response.data;

        json.forEach(el => {
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
    } catch (error) {
        let message = error.statusText || "Ocurrió un error";
        $table.insertAdjacentHTML("afterend", `<p><b>Error: ${error.status}:${message}</b></p>`);
    }
}

/*--DOM ready */
document.addEventListener("DOMContentLoaded", getAll);

/*--Evento Submit-- */
document.addEventListener("submit", async e => {
    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {
            //POST
            try {
                let options = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json;charset=utf-8"
                    },
                    data: JSON.stringify({
                        nombre: e.target.nombre.value,
                        color: e.target.color.value,
                        drop: e.target.drop.value
                    })
                }

                response = await axios("http://localhost:5555/mobs", options),
                    json = await response.data;

            } catch (error) {
                let message = error.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${error.status}:${message}</b></p>`);
            }
        } else {
            //PUT
            try {
                let options = {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json;charset=utf-8"
                    },
                    data: JSON.stringify({
                        nombre: e.target.nombre.value,
                        color: e.target.color.value,
                        drop: e.target.drop.value
                    })
                }

                response = await axios(`http://localhost:5555/mobs/${e.target.id.value}`, options),
                    json = await response.data;

            } catch (error) {
                let message = error.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${error.status}:${message}</b></p>`);
            }
        }
    }
});

/*-- Agregar Interfaz Editar --*/
document.addEventListener("click", async e => {
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
            try {
                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json;charset=utf-8"
                    },
                }

                response = await fetch(`http://localhost:5555/mobs/${e.target.dataset.id}`, options),
                    json = await response.data;
            } catch (error) {
                let message = error.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${error.status}:${message}</b></p>`);
            }
            console.log(e.target.dataset.id);
        }
    }
});