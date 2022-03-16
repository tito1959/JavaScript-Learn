class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    //Métodos
    sonar() {
        console.log(`Sonar!!`);
    }

    saludar() {
        console.log(`Nombre: ${this.nombre}`);
    }
}

class Perro extends Animal {
    constructor(nombre, genero, size) {
        super(nombre, genero);
        this.size = size;
    }

    // Métodos
    sonar() {
        console.log(`Sonar como clase Perro`);
    }

    saludar() {
        console.log(`Sonar como clase Perro`);
    }
}

const pinsher = new Perro("Luca", "Macho", "Mediano"),
    Ave = new Animal("Gaviota", "Hembra");

console.log(pinsher);
pinsher.saludar();

console.log(Ave);