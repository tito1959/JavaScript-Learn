//Si una promesa se cumple retorna un valor, en caso de no genera una excepción.
//analogia a un if,else.

function cuadradoPromise(value) {

    if (typeof value !== "number") return Promise.reject(`Errorm el valor "${value}" ingresado no es un número`);

    return new Promise((resolve, reject) => { //Promise tiene dos parametros resolve, reject. (resuelve o rechaza la promsea.)
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | Math.random() * 1000);
    });
}

cuadradoPromise(0)
    .then((obj) => {
        console.info("Inicio de Promises");
        console.info(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then((obj) => {
        console.info(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(3);
    })
    .then((obj) => {
        console.info(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise("4");
    })
    .then((obj) => {
        console.info(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
    })
    .then((obj) => {
        console.info(`Promise: ${obj.value}, ${obj.result}`);
        console.info("Fin Promesa");
    }) // método then se ejecuta despues de realizar la función resolve
    .catch(err => console.error(err)); //manejo de excepciones