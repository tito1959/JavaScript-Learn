// El estado Global.
const state = {
  todoList: [],
};

// Template UI
const template = () => {
  if (template.data.todoList.length < 1) return `<p><em>Lista sin tareas por hacer.</em></p>`;

  let todos = template.data.todoList.map((item) => `<li>${item}</li>`).join("");
  return todos;
};

// Agregar State al Template que genera el Componente de UI (State Local)
// El estado Local
template.data = {
  todoList: [],
};

// Render UI
const render = () => {
  console.log("Estado Global", state);
  console.log("Estado Local", template.data);
  const $list = document.getElementById("todo-list");

  if (!$list) return;
  $list.innerHTML = template();
};

// Actualizar el State de forma reactiva
const setState = (obj) => {
  for (let key in obj) {
    if (template.data.hasOwnProperty(key)) {
      //Verifica si dicha propiedad existen en state.
      template.data[key] = obj[key];
    }
  }
  render();
};

//Obtenemos una compia inmutable del State
const getState = () => JSON.parse(JSON.stringify(template.data));

document.addEventListener("DOMContentLoaded", render);

// Estableciendo valores por defecto al state
setState({
  todoList: ["Tarea 1", "Tarea 2"],
});

const items = getState();
items.todoList.push("Esto comprueba la inmutabilidad del estado.");

document.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();

  const $item = document.getElementById("todo-item");
  if (!$item) return false;

  // Actualizar el State y la UI de forma Reactiva
  const lastState = getState();
  lastState.todoList.push($item.value);
  setState({ todoList: lastState.todoList });

  // Limpiar el input.
  $item.value = "";
  $item.focus();
});
