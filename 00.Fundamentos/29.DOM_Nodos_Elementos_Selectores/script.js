console.log(document.getElementsByTagName("li"));

// console.log(getElementsByClassName("cards"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("what"));

//----------------------------------------------------
// *********** métodos reemplzados por querySelector. ***************
//este método tiene menos rendimiento que los anteriores.

console.log("********* query selector ***********");
console.log(document.querySelector(".menu"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);