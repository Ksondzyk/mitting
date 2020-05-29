//todo list
/// 1.create array of events (where we store data) and create test events
/// 2. write render event function //отрисовка массива в html
//// 3. addEventListener for list  checkbox
///4.  добавить eventListener  на  сheckbox, поменять инфу, обновить  инфу and render tasks;
/// 5.create handler - create task and put ta the render tasks
const listElem = document.querySelector(".list");
const tasks = [
  { text: "Buy milk", done: false, id: "1" },
  { text: "Pick up Tom from airport", done: false, id: "2" },
  { text: "Visit party", done: false, id: "3" },
  { text: "Visit doctor", done: true, id: "4" },
  { text: "Buy meat", done: true, id: "5" },
];
const renderTasks = (tasksList) => {
  listElem.innerHTML = "";
  const tasksElems = tasksList
    .slice()
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("data-id", id);
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);
      return listItemElem;
    });
  listElem.append(...tasksElems);
};
renderTasks(tasks);

const todoListElem = document.querySelector(".list");
todoListElem.addEventListener("click", onToggleTask);

//algo
//1 ckeck if checkbox is cliked if not - exit
//2 get checkbox data-id
//3 find by task by id
//4 update task

function onToggleTask(event) {
  //   console.log(event);

  const isChecbox = event.target.classList.contains("list__item-checkbox");
  console.log(isChecbox);
  if (!isChecbox) {
    return;
  }

  let task = tasks.find((el) => {
    return el.id == event.target.dataset.id;
  });
  task.done = event.target.checked;
  renderTasks(tasks);
}
//устанав клик на актионс
// находит поле инпут и проверяем пустое оно или нет
// если поле пустой віходим из функции
// если нет добавляем в обьект новій елемент

const btnCreate = document
  .querySelector(".create-task-btn")
  .addEventListener("click", createTask);

function createTask() {
  const input = document.querySelector(".task-input");
  if (input.value.length === 0) {
    return;
  }
  const count = tasks.length + 1;

  tasks.push({
    text: input.value,
    done: false,
    createDate: new Date().toString(),
    id: count.toString(),
  });
  renderTasks(tasks);
  document.querySelector(".task-input").value = "";
}
createTask();
