const $item = document.getElementById("todo-item"),
  $list = document.getElementById("todo-list");

document.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();

  let $li = document.createElement("li");
  $li.textContent = $item.value;

  $list.appendChild($li);

  $item.value = "";
  $item.focus();
});
