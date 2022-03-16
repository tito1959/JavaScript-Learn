//---------------- json parse, json stringify --------------------

console.log(JSON.parse("19"));
console.log(JSON.parse("[1, 2, 3]"));

console.log(JSON.stringify({ x: 2, y: 3 }))
console.log(JSON.stringify([1, 2, 3, 4]));

//-----------------------------------------------------------------

console.log(JSON.parse('{"cadena": "Sebas", "numero": 35, "Booleano": true, "arreglo": ["correr", "programar","cocinar"], "objeto": {"twitter": "@sebas.com"}}'));