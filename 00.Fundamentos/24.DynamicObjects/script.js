/*
 *  Podemos ingresar dinamicamente valores a objetos.
 */

let aleatorio = Math.round(Math.random() * 100 + 5);

const objUsuarios = {
    propiedad: "Valor",
    [`id_${aleatorio}`]: "Valor Aleatorio"
};
console.log(objUsuarios);

const usuarios = ["Jon", "Irma", "Miguel", "Kala", "Sebas"];

usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario);

console.log(objUsuarios);