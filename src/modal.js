// Get the modal, open button, and close button elements
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close-btn");

// When the user clicks the open button, display the modal
openBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on the close button, hide the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal content, hide the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
