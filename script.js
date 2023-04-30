tasks = [];
tasks = document.getElementsByClassName("task");
count = 0;

let input_field = document.getElementById("new_note");
let note_headers = document.getElementsByClassName("note_header");
let btn = document.getElementById("add");

btn.addEventListener("click", () => {
  addTask();
});

function addTask() {
  tasks[count].innerHTML = `${input_field.value}`;
  note_headers[count].innerHTML = `Task ${
    count + 1
  } <i class="fa-sharp fa-solid fa-square-xmark cross_icon"></i>`;
  count++;
  input_field.value = "";
  if (count == 6) {
    count = 0;
  }
}

input_field.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

const cross_icons = document.querySelectorAll(".cross_icon");

cross_icons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    const noteElement = event.target.closest(".box");
    // Remove the note element
    noteElement.remove();
  });
});
