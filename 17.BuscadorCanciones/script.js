const $form = document.getElementById("song-search"),
  $loader = document.querySelector(".loader"),
  $error = document.querySelector(".error"),
  $main = document.querySelector(".main"),
  $artist = document.querySelector(".artist"),
  $song = document.querySelector(".song");

$form.addEventListener("submit", async (e) => {
  //Evento del formulario
  e.preventDefault();

  try {
    $loader.style.display = "block";

    let artist = e.target.artist.value.toLowerCase(),
      song = e.target.song.value.toLowerCase(),
      $artistTemplate = "",
      $songTemplate = "",
      artistAPI = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`,
      songAPI = `https://api.lyrics.ovh/v1/${artist}/${song}`,
      artistFetch = fetch(artistAPI),
      songFetch = fetch(songAPI),
      [artistRes, songRes] = await Promise.all([artistFetch, songFetch]), //Destructuración
      artistData = await artistRes.json(),
      songData = await songRes.json();

    /* Validación Errores de artistAPI */
    if (artistData.artist === null) {
      $artistTemplate = `<h2>No existe el intérprete <mark>${artist}</mark></h2>`;
    } else {
      /* Insertando data a Template para mostrar en el HTML */
      let artist = artistData.artists[0];

      $artistTemplate = `
      <h2>${artist.strArtist}</h2>
      <div class="container">
      <img src="${artist.strArtistThumb}" alt="${artist.strArtist}">
      <p>${artist.intBornYear} - ${artist.intDiedYear || "Presente"}</p>
      <p>${artist.strCountry}</p>
      <p>${artist.strGenre} - ${artist.strStyle}</p>
      <a href="http://${artist.strWebsite}" target="_blank">Sitio Web</a>
      <p>${artist.strBiographyEN}</p>
      </div>
      `;
    }

    /* Validacion Errores de songAPI  */
    if (songData.error) {
      $songTemplate = `<h2>No existe la canción <mark>${song}</mark></h2>`;
    } else {
      $songTemplate = `
        <h2>${song.toUpperCase()}</h2>
        <blockquote>${songData.lyrics}</blockquote>
      `;
    }

    $loader.style.display = "none";
    $artist.innerHTML = $artistTemplate;
    $song.innerHTML = $songTemplate;
  } catch (error) {
    console.log(error);
    let message = error.statusText || "Ocurrió un error";
    $error.innerHTML = `<p>Errror ${error.status}: ${message}</p>`;

    $loader.style.display = "none";
  }
});
