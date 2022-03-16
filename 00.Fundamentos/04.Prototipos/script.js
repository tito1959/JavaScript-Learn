// Javascript esta basado en prototipos, a lo cual hace referencia a un sistema de clases y POO.

// Función constructora
function Animal(nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
}

//Asignamos los métodos al mismo prototipo:
// Método1 clase Animal.
Animal.prototype.sonar = function() {
    console.log("Sonar!!");
};
//Método2 clase Animal.
Animal.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre}`);
};

// ----Herencia proptotipada.----- //
function Perro(nombre, genero, size) {
    this.super = Animal;
    this.super(nombre, genero);
    this.size = size;
}

// -----Perro hereda de Animal:------ //
Perro.prototype = new Animal(); //Hereda todas las propiedades de Animal
Perro.prototype.constructor = Perro;

// ------Sobreescritura de métodos del prototipo padre.------ //
Perro.prototype.sonar = () => console.log("Soy un perro!");
Perro.prototype.ladrar = () => console.log("Estoy ladrando!"); //Nuevo método para la clase hija Perro.

// Instancias de la clase hija Perro.
const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
    Bunny = new Animal("Bunny", "Hembra");

console.log(snoopy);
snoopy.sonar();
snoopy.saludar(); //Aunque este método no este definido dentro de la clase hija Perro, hereda los métodos de su clase padre.
snoopy.ladrar();

console.log(Bunny);
Bunny.sonar();
Bunny.saludar();

// Uno de lo grandes problemas es la duplicación de métodos por objetos, esto aumentara el espacio en memoria
// Debido a esto, es preferible tomar todos los métodos y establecerlos fuera de las funciones.