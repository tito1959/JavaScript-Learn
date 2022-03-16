const $btnAbrir = document.getElementById("openWindow"),
    $btnClose = document.getElementById("closeWindow"),
    $btnPrint = document.getElementById("printWindow");

let ventana;


$btnAbrir.addEventListener("click", (e) => {
    ventana = open("https://www.google.com");
});

$btnClose.addEventListener("click", (e) => {
    ventana.close();
});

$btnPrint.addEventListener("click", (e) => {

});