/*
 * La etiqueta template no se renderiza en el DOM estas etiquetas son usadas para ser un modelo, para generar objetos.
 */

const $cards = document.querySelector(".cards"),
    $template = document.getElementById('template-card').content,
    $fragment = document.createDocumentFragment(), //fragmento para ir alamacenando dinamicamente la info
    cardContent = [{
            title: "Tecnología",
            img: "https://placeimg.com/200/200/tech",
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals",
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch",
        },
        {
            title: "Gente",
            img: "https://placeimg.com/200/200/people",
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature",
        },
    ];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;
    //solo podemos tener referenciado un unico template, para ello creamos nuevos nodos.

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);