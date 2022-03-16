function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value); //recibe un parametro, y una funcion. (en este caso una multiplicación);
    }, 0 | Math.random() * 1000);
}

cuadradoCallback(0, (value, result) => { // invocamos la función (recibe un valor, recibe una función "arrow function, que recibe valor y resultado.")
    console.log('Inicia Callback'); // las callbacks deben manejar sus errores en cada petición.
    console.info(`Callback: ${value}, ${result}`);
    cuadradoCallback(0, (value, result) => {
        console.info(`Callback: ${value}, ${result}`);
        cuadradoCallback(1, (value, result) => {
            console.info(`Callback: ${value}, ${result}`);
            cuadradoCallback(2, (value, result) => {
                console.info(`Callback: ${value}, ${result}`);
                cuadradoCallback(3, (value, result) => {
                    console.info(`Callback: ${value}, ${result}`);
                    cuadradoCallback(4, (value, result) => {
                        console.info(`Callback: ${value}, ${result}`);
                    });
                });
            });
        });
    });
});

function saludar(nombre) {
    alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
}

procesarEntradaUsuario(saludar);