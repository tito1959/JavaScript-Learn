export function ajax(props) {
  let { url, callBackSuccess } = props;

  fetch(url)
    .then((response) => (response.ok ? response.json() : Promise.reject(response)))
    .then((json) => callBackSuccess(json))
    .catch((error) => {
      let message = error.statusText || "Ocurrió un error al acceder al API";
      document.getElementById("root").innerHTML = `
      <div>
      <p class="error">Error ${error.status} : ${message}</p>
      </div>
      `;

      console.log(error);
    });
}
