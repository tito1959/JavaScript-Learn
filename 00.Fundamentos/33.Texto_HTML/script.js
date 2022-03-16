const $whatDOM = document.getElementById('what');

const text = `<p> Texto de prueba para insertar texto dentro de un documento
de HTML el cual puede contener macado de etuiquetas o no</p>

<p>
<i> Este provee una representacion estructural del document </i>, permitiendo modificar su contenido 
y presentacion visual mediante código JS.
</p>

<p>
<mark> El DOM no es parte de la especificación de JavasCritpt, es una <strong> API </strong> para los navegadores. </mark>
</p>
`;

//Solo insertando codigo HTML
$whatDOM.textContent = text;

//Solo insertando Texto
// $whatDOM.textContent = text;

//Outer reemplaza el contenido del DOM por nuevo texto.
$whatDOM.outerHTML = text;