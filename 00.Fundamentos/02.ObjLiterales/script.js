let nombre = "Doggiest",
    edad = "5";

//Objeto literal de forma tradc.

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function() {
        console.log("guau guau");
    }
}

console.log(perro);
perro.ladrar();

//Nueva forma de declarar objetos literales:

const dog = {
    nombre,
    edad,
    raza: "asd",
    ladrar() { console.log("guau gau"); }
}

console.log(dog);
dog.ladrar();