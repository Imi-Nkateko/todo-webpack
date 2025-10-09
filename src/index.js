// index.js
import "./styles.css";
import "./modal.css";
//import { todo } from "./todo.js";

//console.log(todo);

// Get the modal, open button, and close button elements
import { modal, openBtn, closeBtn } from "./modal";

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
