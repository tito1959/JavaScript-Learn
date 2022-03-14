import stripeKey from "./modules/stripeKey.js";

const $poster = document.getElementById("poster"),
  $template = document.getElementById("poster-template").content,
  $fragment = document.createDocumentFragment(),
  $fetchOptions = {
    headers: { Authorization: "Bearer " + stripeKey.secret },
  };

let products, prices;

/*Function Money Formats */
const moneyFormat = (num) => `$${num.slice(0, 2)}.${num.slice(2, -2)}.${num.slice(-2)}`; //toma como referencia la posición 0 y elimina los 2 últimos caracteres.
const upperWord = (word) => `${word.toUpperCase()}`;

/* Recepción de todas las solicitudes Fetch. */
Promise.all([
  fetch("https://api.stripe.com/v1/products", $fetchOptions),
  fetch("https://api.stripe.com/v1/prices", $fetchOptions),
])
  .then((responses) => Promise.all(responses.map((response) => response.json()))) //Map para cada response a un json.
  .then((json) => {
    products = json[0].data;
    prices = json[1].data;
    // console.log(products, prices);

    prices.forEach((el) => {
      let productData = products.filter((product) => product.id === el.product); //Igualamos el producto y el precio en un filtro.

      $template.querySelector(".poster").setAttribute("data-price", el.id);
      $template.querySelector("img").src = productData[0].images[0];
      $template.querySelector("img").alt = productData[0].name;
      $template.querySelector("figcaption").innerHTML = `
      ${productData[0].name}
      <br>
      ${moneyFormat(el.unit_amount_decimal)} ${upperWord(el.currency)}
      `;

      let $clone = document.importNode($template, true); //true importa hasta sus nodos.
      $fragment.appendChild($clone);
    });

    $poster.appendChild($fragment);
  })
  .catch((error) => {
    console.log(error);
    let message = error.statusText || "Ocurrió un error al conectarse con la API";
    $poster.innerHTML = `<p>Error ${error.status}: ${message}</p>`;
  });

document.addEventListener("click", (e) => {
  if (e.target.matches("figcaption")) {
    let priceId = e.target.parentElement.getAttribute("data-price"); //Seleccionar su elemento padre.
    Stripe(stripeKey.public)
      .redirectToCheckout({
        lineItems: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: "subscription",
        successUrl: "http://127.0.0.1:5501/13.Stripe/stripeSucces.html",
        cancelUrl: "http://127.0.0.1:5501/13.Stripe/stripeCancel.html",
      }) //recibe una promesa.
      .then((response) => {
        if (response.error) {
          $poster.insertAdjacentHTML("afterend", response.error.message);
        }
      });
  }
});
