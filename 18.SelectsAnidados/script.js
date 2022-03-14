const $selectPrimary = document.getElementById("select-primary"),
  $selectSecondary = document.getElementById("select-secondary");

function loadDepartaments() {
  fetch("./API/model.json")
    .then((response) => (response.ok ? response.json() : Promise.reject(response)))
    .then((json) => {
      let $options = `<option value =""> Elige un Departamento...</option>`;
      let elements = new Set();
      let i = 1;

      json.forEach((el) => {
        elements.add(el.departamento);
      });

      elements.forEach((el) => {
        $options += `<option value ="${el}"> ${i} - ${el} </option>`;
        i++;
      });
      $selectPrimary.innerHTML = $options;
    })
    .catch((error) => {
      console.log(error);
      let message = error.statusText || "Ocurrió un error";
      $selectPrimary.insertAdjacentHTML(beforeend, `Error ${error.status} : ${message}`);
    });
}

function loadCities(state) {
  fetch("./API/model.json")
    .then((response) => (response.ok ? response.json() : Promise.reject(response)))
    .then((json) => {
      let $options = `<option value =""> Elige un municipio...</option>`;
      let elements = new Set();
      let i = 1;

      json.forEach((el) => {
        if (el.departamento === state) {
          elements.add(el.municipio);
        }
      });

      elements.forEach((el) => {
        $options += `<option value ="${el}"> ${i} - ${el} </option>`;
        i++;
      });
      $selectSecondary.innerHTML = $options;
    })
    .catch((error) => {
      console.log(error);
      let message = error.statusText || "Ocurrió un error";
      $selectSecondary.insertAdjacentHTML(beforeend, `Error ${error.status} : ${message}`);
    });
}

document.addEventListener("DOMContentLoaded", loadDepartaments);

$selectPrimary.addEventListener("change", (e) => loadCities(e.target.value));
