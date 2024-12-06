const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function addItem() {
  let inputValue = input;
  inputValue = "";
  const li = document.createElement("li");
  const span = document.createElement("span");
  const removeBtn = document.createElement("button");

  li.appendChild(span);
  li.appendChild(removeBtn);

  span.textContent = inputValue;
  removeBtn.textContent = "Remove";

  ul.appendChild(li);
  input.focus();
}

button.addEventListener("click", addItem());
