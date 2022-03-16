/*Set es un objeto que acepta un arreglo como parametro, este puede
contener diferentes tipos de datos, tiene el metodo .size, .add
el objeto set solo imprime 1 dato que este repetido, incluso en ciclos.
Los set son colecciones de objetos, estos pueden ser transformados a arreglos
Los objetos Set son colecciones de valores. Se puede iterar sus elementos en el
orden de su inserción. Un valor en un Set sólo puede estar una vez; éste es único en la colección Set.*/


//----------------------------
const set = new Set([1, 2, 3, 3, 3, 3, 4, 5, true, false, b = { set1: "setti" }, "HoLa"]); //

console.log(set);
console.log(set.size);
//-----------------------------
const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(true);
set2.add(false);
set2.add({ go: 666 });

console.log(set2);
console.log(set2.size);
//----------------------------
console.warn("Recorriendo ciclo for of de set2");
//----------------------------
for (item of set2) {
    console.log(item);
}
//----------------------------
console.warn("Recorriendo ciclo forEach de set");
//----------------------------
set.forEach(item => console.log(item));
//----------------------------
let arr = Array.from(set); // transformamos nuestro set en array.
console.log(arr);
console.log(arr[0]);
//---------------------------------
//set tiene un método para eliminar datos: set.delete

set.delete(3);
console.log(set);

//metodo has devuelve true si existe en el arreglo:
console.log(set.has(b));

//clear
set.clear();
console.log(set);