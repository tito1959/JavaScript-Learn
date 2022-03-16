console.log(this);

this.lugar = "Contexto Global";

function saludar(saludo, aQuien) {
    console.log(`${saludo} ${aQuien} desde el:  ${this.lugar}`);
}
saludar(); //undefined undefined

//-------------------------------------
const obj = {
    lugar: "Contexto Objeto"
}

saludar.call(obj, "Jelow", "Sebitas"); //Undefined saludo, aQuien
saludar.call(null, "Jelow", "Sebitas");
saludar.call(this, "Jelow", "Sebitas");
saludar.apply(obj, ["Hola", "Sebas"]);
saludar.apply(null, ["Hola", "Sebas"]);
saludar.apply(this, ["Hola", "Sebas"]); //deben pasarse por un arreglo los parametros.

//------------------------------------------
this.nombre = "Window";

const persona = {
    nombre: "sebbas",
    saludar: function() { // function nomal vs arrowfunction (arrow function va al ambito global.)
        console.log(`Hola ${this.nombre}`);
    }
}
persona.saludar();

const otraPersona = {
    saludar: persona.saludar.bind(this)
}
otraPersona.saludar();