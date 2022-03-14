const d = document, n = navigator;

export default function getGeolocation(id) {

    const $id = d.getElementById(id);

    let options = {

        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    const success = (position) => {

        let c = position.coords;

        $id.innerHTML = `<p>Tu posición actual es: </p>
        <ul>
        <li>Latitud: <b>${c.latitude}</b></li>
        <li>Longitud: <b>${c.longitude}</b></li>
        <li>Precisión: <b>${c.accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${c.latitude}, ${c.longitude}, 20z" target="_blank" rel="noopener"> Ver en Google Maps </a>
        `;
    };

    const error = (err) => {
        $id.innerHTML = `<p><mark>Error al obtener localización: ${err.code}: ${err.message}</mark></p>`;
    };

    n.geolocation.getCurrentPosition(success, error, options);
}