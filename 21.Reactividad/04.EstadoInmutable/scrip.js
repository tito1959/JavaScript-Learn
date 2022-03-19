// El estado.
const state = {
  todoList: [],
};

// Template UI
const template = () => {
  if (state.todoList.length < 1) return `<p><em>Lista sin tareas por hacer.</em></p>`;

  let todos = state.todoList.map((item) => `<li>${item}</li>`).join("");
  return todos;
};

// Render UI
const render = () => {
  $list = document.getElementById("todo-list");

  if (!$list) return;
  $list.innerHTML = template();
};

// Actualizar el State de forma reactiva
const setState = (obj) => {
  for (let key in obj) {
    if (state.hasOwnProperty(key)) {
      //Verifica si dicha propiedad existen en state.
      state[key] = obj[key];
    }
  }
  render();
};

document.addEventListener("DOMContentLoaded", render);

// Estableciendo valores por defecto al state
setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4", "Tarea 5"],
});

document.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();

  const $item = document.getElementById("todo-item");
  if (!$item) return false;

  // Actualizar el State y la UI
  state.todoList.push($item.value);
  render();

  $item.value = "";
  $item.focus();
});
