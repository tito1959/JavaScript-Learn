//Parametros REST

function sumar(a, b, ...args) {
    let resultado = a + b;

    args.forEach((n) => {
        resultado += n;
    });

    return resultado;
}

console.log(sumar(1, 2, 3, 4, 10));

//Spread Operator o Operador de Propagación.

const array1 = [1, 2, 3, 4, 10],
    array2 = [5, 9, 12, 8, 60];

const array3 = [...array1, ...array2];

console.log(array3);

// Esta es una función anonima que recorre un arreglo teniendo en cuenta su valor y su indicé con la palabra reservada: index.
array3.forEach((number, index) =>
    console.log(`El valor del indicé es: ${index} y su valor es: ${number}`)
);