const $d = document;

export function digitalClock(clock, btnPlay, btnStop) {

  let reloj = $d.getElementById(clock);
  let playb = $d.getElementById(btnPlay);
  let stop = $d.getElementById(btnStop);

  playb.addEventListener("click", play);

  function play() {

    let clock = setInterval(() => {

      let hour = new Date().toLocaleTimeString();
      reloj.innerHTML = `<h3>${hour}</h3>`;
    }, 1000);

    playb.disabled = true;

    stop.addEventListener("click", () => {
      clearInterval(clock);
      reloj.innerHTML = null;
      playb.disabled = false;
    });
  }


}
export function alarm(sound, btnPlay, btnStop) {

  let alarmT;

  // Creamos la etiqueta de tipo sonido
  const $alarm = $d.createElement("audio");
  $alarm.src = sound;

  $d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmT = setTimeout(() => {
        $alarm.play();
      }, 2000)
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearTimeout(alarmT);
      $alarm.pause();
      $alarm.currentTime = 0;
      $d.querySelector(btnPlay).disabled = false;
    }
  });
}