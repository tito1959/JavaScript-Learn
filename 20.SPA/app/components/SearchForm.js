export function SearchForm() {
  const $form = document.createElement("form");
  const $input = document.createElement("input");

  $form.classList.add("search-form");
  $input.type = "search";
  $input.placeholder = "Buscar...";

  $form.appendChild($input);

  return $form;
}
