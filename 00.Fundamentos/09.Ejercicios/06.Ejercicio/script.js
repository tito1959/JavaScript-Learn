/*
 *Programa una función que dada una cadena de texto cuente el número de vocales y consonantes.
 * Ej, miFuncion("Hola Mundo") devuelva, Vocales: 4, Consonantes: 5. 
 */

const contarLetras = (cadena = "") => {
    if (typeof cadena !== "string" || cadena === "") return console.warn("La cadena debe ser un texto.");

    let vocales = cadena.match(/[aeiouáéíóúü]/ig).length;
    let consonantes = cadena.match(/[qwrtypsdfghjklñzxcvbnm]/gi).length;

    return console.info({
        cadena,
        vocales,
        consonantes
    });
}

contarLetras(`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit eligendi quidem earum molestiae itaque tenetur amet distinctio iste atque culpa?
        `);
/*
 * Programa una función que valide que un texto sea un nombre válido, ej. miFuncion('Jonathan Micha') devolverá: true.
 */

const validarNombre = (nombre = "") => {
    if (typeof nombre !== "string" || nombre === "") return console.warn(`El campo debe ser texto.`);

    let emailRegex = /^[A-Za-z\s]+$/g;
    let saveName = nombre.trim();
    validName = emailRegex.test(saveName);

    return (validName) ? console.info(`Es valido ${saveName}`) : console.warn(`No es valido ${saveName}`);
}

validarNombre("Sebastian");

/*
 * Programa una función que valide que un texto sea un email válido, ej. miFuncion("jonmicha@gmail.com") devolverá: true. 
 */

const validarMail = (nombre = "") => {
    if (typeof nombre !== "string" || nombre === "") return console.warn(`El campo debe ser texto.`);

    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let saveName = nombre.trim();
    validName = emailRegex.test(saveName);

    return (validName) ? console.info(`Es valido ${saveName}`) : console.warn(`No es valido ${saveName}`);
}

validarMail("asdasd@mail.asd");