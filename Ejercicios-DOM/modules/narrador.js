const d = document, w = window;

export default function speechReader() {

    const $speechSelect = d.getElementById("speech-select"),
        $speechTextarea = d.getElementById("speech-text"),
        $speechBtn = d.getElementById("speech-btn"),
        $speechMessage = new SpeechSynthesisUtterance();

    let voices = [];

    d.addEventListener("DOMContentLoaded", (e) => {

        w.speechSynthesis.addEventListener("voiceschanged", (e) => {

            voices = w.speechSynthesis.getVoices();

            voices.forEach((voice) => {

                const $options = d.createElement("option");
                $options.value = voice.name;
                $options.textContent = `${voice.name} -> ${voice.lang}`;

                $speechSelect.appendChild($options);
            });
        });
    });

    d.addEventListener("change", (e) => {

        if (e.target === $speechSelect) {

            $speechMessage.voice = voices.find((voice) => voice.name === e.target.value);
        }
    });

    d.addEventListener("click", (e) => {
        if (e.target === $speechBtn) {

            $speechMessage.text = $speechTextarea.value;
            w.speechSynthesis.speak($speechMessage);
            console.log("asd");
        }
    });

}