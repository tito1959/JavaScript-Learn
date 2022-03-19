export async function ajax(props) {
  let { url, callBackSuccess } = props;

  await fetch(url, {
    method: "GET",
  })
    .then((response) => (response.ok ? response.json() : Promise.reject(response)))
    .then((json) => callBackSuccess(json))
    .catch((error) => {
      let message = error.statusText || "Ocurrió un error al acceder al API";
      document.getElementById("main").innerHTML = `
      <div>
      <p class="error">Error ${error.status} : ${message}</p>
      </div>
      `;

      document.querySelector(".loader").style.display = "none";

      console.log(error);
    });
}
