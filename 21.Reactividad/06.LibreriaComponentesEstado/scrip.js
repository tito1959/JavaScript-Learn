import { Component } from "./Component.js";

const app = new Component({
  el: "#todo-list",
  data: {
    todoList: [],
  },
  template: function (props) {
    if (props.todoList.length < 1) return `<p><em>Lista sin tareas por hacer.</em></p>`;

    let todos = props.todoList.map((item) => `<li>${item}</li>`).join("");
    return todos;
  },
});

console.log(app.render);

document.addEventListener("DOMContentLoaded", app.render);

// Estableciendo valores por defecto al state
app.setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
});

document.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();

  const $item = document.getElementById("todo-item");
  if (!$item) return false;

  // Actualizar el State y la UI de forma Reactiva
  const lastState = app.getState();
  lastState.todoList.push($item.value);
  app.setState({ todoList: lastState.todoList });

  // Limpiar el input.
  $item.value = "";
  $item.focus();
});
