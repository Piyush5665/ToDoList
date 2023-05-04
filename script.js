let input_field = document.getElementById("new_note");
let note_headers = document.getElementsByClassName("note_header");
let btn = document.getElementById("add");
var count = 0;


btn.addEventListener("click", () => {
  if (input_field.value) {
    count++;

    localStorage.setItem(`Task${count}`, input_field.value);
    let item = localStorage.getItem(`Task${count}`);

    addTask(item);
    input_field.value = "";
  }
});


input_field.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && input_field.value) {
    count++;

    localStorage.setItem(`Task${count}`, input_field.value);
    let item = localStorage.getItem(`Task${count}`);

    addTask(item);
    input_field.value = "";
  }
});


const notes = document.querySelector(".notes");

function addTask(item) {

  let task_box = document.createElement("div");
  task_box.classList.add("box");

  let header = document.createElement("div");
  header.classList.add("note_header");
  header.innerHTML = "Task";

  let icon = document.createElement("div");
  icon.classList.add("cross_icon");
  icon.innerHTML = "<i class='fa-sharp fa-solid fa-square-xmark '></i>";

  let task = document.createElement("div");
  task.classList.add("task");
  task.innerText = `${item}`;

  notes.appendChild(task_box);
  task_box.appendChild(header);
  task_box.appendChild(task);
  header.appendChild(icon);

  let cross_icons = document.querySelectorAll(".cross_icon");
  // console.log(cross_icons.length);

  cross_icons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      const noteElement = event.target.closest(".box");
      noteElement.remove();
    });
  });

  addDate(task);
}

function addDate(task) {
  let d = new Date();

  let h = d.getHours();
  let m = d.getMinutes();
  m = m < 10 ? "0" + m : m;

  let day = d.getDay();
  day = day < 10 ? "0" + day : day;

  let month = d.getMonth() + 1;
  month = month < 10 ? "0" + month : month;

  let year = d.getFullYear().toString().slice(-2);

  let para = document.createElement("div");
  para.classList.add("task_time");
  para.innerHTML = `${h}:${m} ${day}/${month}/${year}`;

  task.appendChild(para);
}

// btn.addEventListener("click", () => {
//   addTask();
// });

// function addTask() {
//   tasks[count].innerHTML = `${input_field.value}`;
//   // note_headers[count].innerHTML = `Task ${
//   //   count + 1
//   // } <i class="fa-sharp fa-solid fa-square-xmark cross_icon"></i>`;
//   count++;
//   input_field.value = "";
//   if (count == 6) {
//     count = 0;
//   }
// }

// input_field.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     addTask();
//   }
// });

// const cross_icons = document.querySelectorAll(".cross_icon");

// cross_icons.forEach((icon) => {
//   icon.addEventListener("click", (event) => {
//     const noteElement = event.target.closest(".box");
//     // Remove the note element
//     noteElement.remove();
//   });
