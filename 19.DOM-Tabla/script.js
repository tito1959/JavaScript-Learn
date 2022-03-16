const d = document;

function agregarFila() {
    let tabla = d.getElementById("tablaProducto");
    /* let tablaRef = tabla.getElementsByTagName("tbody")[0];
   let nuevaFila = tablaRef.insertRow(tablaRef.rows.length);
   let celdaUno = nuevaFila.insertCell(0);

   celdaUno.innerText = "11223344";

   let celdaDos = nuevaFila.insertCell(1);
   celdaDos.innerHTML = "Galletas";

   let celdaTres = nuevaFila.insertCell(2);
   celdaTres.innerHTML = "20.00"; */

    let numFila = tabla.rows.length;
    tabla.insertRow(numFila).innerHTML = `<td> ${numFila} </td> <td>Panqueques</td><td>45.00</td><td><button onclick='eliminarFila(this)'>Eliminar</button></td>`;
}

function eliminarFila() {
    let tabla = document.getElementById("tablaProducto");
    let numFila = tabla.rows.length - 1; //10

    tabla.deleteRow(numFila);
}