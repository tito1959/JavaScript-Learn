const d = document, n = navigator, ua = n.userAgent;
let isMobile = {}, isDesktop = {};


export default function userDiviceInfo(id) {

    isMobile = {
        android: () => navigator.userAgent.match(/android/i),
        ios: () => ua.match(/iphone|iPad|ipod/i),
        windows: () => ua.match(/windows nt/i),
        linux: () => ua.match(/ubuntu|Linux|Fedora|X11/i),
        any: function () {
            return this.android() || this.ios() || this.windows() || this.linux();
        },
    },

        isDesktop = {
            chrome: () => ua.match(/chrome/i),
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/firefox/i),
            edge: () => ua.match(/edge/i),
            any: function () {
                return (this.chrome() || this.safari() || this.firefox() || edge());
            },
        }

    const $id = d.querySelector(id);
    // let text = $id.innerText; -> Selecionar el texto de un html
    $id.innerHTML = `
    <ul>
        <li>User Agent <b>${ua}</b></li>
        <br>
        <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
    </ul>`;
}