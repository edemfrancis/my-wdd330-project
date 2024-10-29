import { fetchBookApi } from "./utilis.mjs";

// Make sure the selector is correct for readDivCard
const readcard = document.querySelector(".readDivCard");
const readButton = document.querySelector(".book-read button");
const inputId = document.getElementById("newTodo");

// Check if readButton exists before trying to access its value
if (readButton) {
  const buttonvalue = readButton.value;

  // Add event listener directly to readButton
  readButton.addEventListener("click", () => {
    fetchBookApi(inputId.value, readcard);
  });
} else {
  console.error("Read button not found. Check the selector.");
}

// Use DOMContentLoaded to ensure elements are accessible
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("openPopup").addEventListener("click", function () {
    document.getElementById("popupModal").style.display = "flex";
  });

  document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popupModal").style.display = "none";
  });

  window.onclick = function (event) {
    if (event.target == document.getElementById("popupModal")) {
      document.getElementById("popupModal").style.display = "none";
    }
  };

  document.getElementById("addTodoButton").addEventListener("click", function () {
    const todoInput = document.getElementById("newTodo");
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
      const buttonRead = document.createElement("button");
      buttonRead.textContent = todoText;
      const tod = document.getElementById("todoList");
      tod.appendChild(buttonRead);

      const read = document.querySelector(".book-read");
      if (read) {
        read.appendChild(buttonRead);
      }

      todoInput.value = ""; // Clear the input
    }
  });
});