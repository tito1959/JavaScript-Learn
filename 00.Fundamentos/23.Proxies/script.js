/*
 *  se usa para definir una comportamiento personalizado para operaciones fundamentales
 * ejemplo para observar propiedades cuando se asignan, enumracion, invocacion de funciones etc.
 */

const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

const manejador = {
  //handler
  set(obj, prop, valor) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(
        `La propiedad ${prop} No existe en el objeto persona.`
      );
    }

    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-Za-zÑñ\s]+$/g.test(valor)
    ) {
      return console.error(
        `La propiedad ${prop} sólo acepta letras y espacios en blanco`
      );
    }

    // obj[prop] = valor;
  },
  //Object.Keys  muestra la llave de cada lista del objeto. e indexOf si hay una coincidencia su valor. (podemos realizar una validación);
};

const sebas = new Proxy(persona, manejador);

sebas.nombre = "SEBAS19"; //ejecución de handler
sebas.apellido = "SAW"; //ejecución de handler
sebas.edad = 25; //ejecución de handler

sebas.email = "@mail.com";

console.log(sebas);
