const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

// function render() {
//     for (let i = 0; i < tasks.length; i++) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(tasks[i]))
//     }
// for (let task of tasks) {
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(task))
// }
// }
// render();

// createBtn.onclick = () => {
//     if (inputElement.value.length === 0) {
//         return
//     }
//   listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value));
//     inputElement.value = "";
// };

// function getNoteTemplate (title) {
//     return `
//     <li
//         class="list-group-item d-flex justify-content-between align-items-center">
//         <span>${title}</span>
//         <span>
//         <span class="btn btn-small btn-success">&check;</span>
//         <span class="btn btn-small btn-danger">&times;</span>
//         </span>
//     </li>`
// }

const tasks = [
  { title: "HTML", completed: true },
  { title: "CSS", completed: false },
  { title: "JS", completed: false },
  { title: "React", completed: false },
  { title: "blalala", completed: true },
];

function render() {
  listElement.innerHTML = ""; 
  if (tasks.length === 0) { 
      listElement.innerHTML = "No tasks to display";
  }
  for (let i = 0; i < tasks.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(tasks[i], i));
  }
}
render();

createBtn.onclick = () => {
  if (inputElement.value.length === 0) {
    return;
  }
  const newTask = {
    title: inputElement.value,
    completed: false,
  };
  tasks.push(newTask);
  render();
  inputElement.value = "";
};

listElement.onclick = (event) => {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === 'toogle') {
      tasks[index].completed = !tasks[index].completed;
    } else if (type === 'remove') {
      tasks.splice(index, 1);
    }

    render();
  }
};

function getNoteTemplate(task, index) {
  return ` 
    <li
        class="list-group-item d-flex justify-content-between align-items-center">
        <span class="${task.completed ? "text-decoration-line-through" : ""}">${
    task.title
  }</span>
        <span>
        <span class="btn btn-small btn-${
          task.completed ? "warning" : "success"
        }" data-index="${index}" data-type="toogle">&check;</span>
        <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
        </span>
    </li>`;
}

