let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis veniam molestiae. Voluptatum error doloremque accusamus harum officia dignissimos! Quibusdam.";

//Las expresiones regulares nos permiten encontrar coincidencias dentro de un string.

let expressionR = new RegExp("lorem", "ig");
console.log(expressionR.test(cadena));
console.log(expressionR.exec(cadena));

let expressionR2 = /lorem{1}/ig; //la expresion {} podemos definir la cantidad de intervalo que debe tener el mismo parametro.
console.log(expressionR2.test(cadena));
console.log(expressionR2.exec(cadena));