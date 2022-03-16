function saludar(nombre = "Desconocid@") {
    alert(`Hola ${nombre}`);
    console.log(event);
}

$eventMultiple = document.getElementById("eventMultiple");
// $eventMultiple.addEventListener("click", saludar); //El evento nativo no se ejecutara satisfactoriamente
$eventMultiple.addEventListener("click", () => { //con una función anonima permite recibir parametros, ya que la arrowfunction es la encargada.
    saludar();
    saludar("Sebas");
});

//Eliminando eventos de un elemento.
$eventRemove = document.getElementById("eventRemove");

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventRemove.removeEventListener("dblclick", removerDobleClick); //requiere un event target.
    $eventRemove.disabled = true;
}

$eventRemove.addEventListener("dblclick", removerDobleClick);