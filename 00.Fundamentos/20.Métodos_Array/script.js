/*
 * En js Tenemos 4 métodos para arreglo muy utiles como lo son:
 * Filter, ForEach, Map, Find
 * Estos tienen en común que reciben una función callback que permite 3 atributos.
 * [Elemento, Indice, Arreglo] 
 * En general solo usamos el atributo Elemento.
 */

//-------------------------------------------------
// ---------------- Metodo Filter -----------------

//El método filter crea un nuevo arreglo, el cual no busca modificar el valor
//de los elemenots para el nuevo arreglo, solo retornara los valores que cumplan su filtro.
//Estos son almacenados en otro arreglo.

const array = [
    { id: 1, username: "Mapper" },
    { id: 2, username: "Finder" },
    { id: 3, username: "Eaching" },
];

const filtered = array.filter((element) => element.username === "Mapper");

console.warn("Elemento Filter");
console.log(filtered);

//-------------------------------------------------
// ---------------- Metodo Find -------------------
/*
 * Con la ayuda del método Find podemos encontrar el primer valor que cumpla con la función
 * el siguiente ejemplo tiene un arreglo de 5 elementos, retornaremos el elemento que sea mayor a 100
 * obteniendo como resultado el primer valor del arreglo que cumple con la condición. 
 */

const array0 = [14, 123, 50, 20, 312];

const myVal = array.find((element) => element > 100);

console.warn("Metodo Find");
console.log(myVal);



//-------------------------------------------------
// ----------------- Método Map -------------------
console.error('Métodos map:');
console.warn('Método map en un arreglo');

let numbers = [1, 5, 10, 15];
let newArr = numbers.map((x) => x * 2);
console.log(newArr);

//--------------------------------------------------
console.warn('Colección de objetos:')
const persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kity", lastname: "Frye" },
    { firstname: "Angelo", lastname: "Cobb" },
];

console.log(persons.map(getFullName));

function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
}