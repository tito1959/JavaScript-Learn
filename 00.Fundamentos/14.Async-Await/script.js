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
/*-1-1-1-
    Las promesas pueden ser compatibles con las funciones async.
*/
async function functionAsyncDeclare() { // Cuando se declara una funcion asincrona, podemos realizar una funcion await(la cual espera a que la función resuelva primero su operación asíncrona).
    try {
        console.log('Inicio Async Function');

        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = cuadradoPromise("5");
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

    } catch (error) {
        console.error(error);
    }
}
functionAsyncDeclare();