//-----------------
/*Map crea un nuevo array con los resultados de la llamada a la función indicada
 *aplicados a cada uno de sus elementos. -- Los objetos y los métodos son distintos.
 *Los array map son como objetos que permiten una coleccion {llave, valor}
 */
//-------------------------------------------------
console.error('Objeto Map:');
let mapa = new Map();

mapa.set('nombre', 'Jon');
mapa.set('apellido', 'Sebas');
mapa.set('edad', 35);
//-------------------------------------------------
console.warn('Métodos del objeto Map:');
console.log(mapa);
console.log(mapa.get('apellido'));
console.log(mapa.has('apellido'));
console.log(mapa.size);

//-------------------------------------------------
console.warn('for map');
for (let [key, value] of mapa) {
    console.log(`Llave: ${key}, Valor: ${value}`);
}

//-------------------------------------------------
console.warn('Arrays Map');
const map2 = new Map([
    ['nombre', 'Kunai'],
    ['edad', '25'],
    ['animal', 'perro'],
    [null, 'nullo'],
]);

const keyMap2 = [...map2.keys()];
const valuesMap2 = [...map2.values()];

console.log(map2);
console.warn('llaves Mapa2');
console.log(valuesMap2);
console.log(keyMap2);