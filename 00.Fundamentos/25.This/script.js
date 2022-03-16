console.log(this);
console.log(window);

console.log(window === this);
//----------------------------------

this.nombre = "Contexto Global";

function imprimir() {
    console.log(this.nombre);
}
imprimir();
//----------------------------------

const obj = {
    nombre: "Contexto Objeto",
    imprimir: function() {
        console.log(this.nombre);
    }
}
obj.imprimir();

//--------------------------------

const obj2 = {
    nombre: "Contexto Objeto 2",
    imprimir
}
obj2.imprimir();

//---------------------------------

const obj3 = {
    nombre: "Contexto Objeto 3",
    imprimir: () => console.log(this.nombre) // El arrow function no tiene scope, por lo que imprimira el contexto global.
}
obj3.imprimir();

//--------------------------------

function Persona(nombre) {
    this.nombre = nombre;

    return () => console.log(this.nombre, 88); //este arrow func permite acceder al contexto local.
}

// return function() { //genera un nuevo scope, y no tiene ninguna propiedad, entonces va al ambito global.
//     console.log(this.nombre);
// }


let sebas = new Persona("Sebastian");
sebas();