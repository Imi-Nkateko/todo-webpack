// index.js
import "./styles.css";
import "./modal.css";
import { title, description, dueDate, priority } from "./modal";

// Get the modal, open button, and close button elements
import { modal, openBtn, closeBtn, addTodoBtn, mainContainer } from "./modal";

// When the user clicks the open button, display the modal
openBtn.onclick = function() {
  modal.style.display = "block";
  console.log("clicked");
};

// When the user clicks on the close button, hide the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal content, hide the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


import { createNewTodo } from "./todo";

addTodoBtn.onclick = function () {
  const newTodo = createNewTodo(); // Create a fresh object from current form input

  const todoElement = document.createElement("div");
  todoElement.classList.add("todo");

  todoElement.innerHTML = `
    <div>
      <h1>${newTodo.title}</h1>
      <p>${newTodo.description}</p>
      <span>${newTodo.dueDate}</span>
      <h2>${newTodo.priority}</h2>
    </div>`;

  mainContainer.appendChild(todoElement);

  // Optional: reset form and close modal
  title.value = "";
  description.value = "";
  dueDate.value = "";
  priority.value = "";

  modal.style.display = "none";
};

