import {renderTasks, tasks} from'./render'

function createTask() {
  const input = document.querySelector(".task-input");
  if (!input.value) {
    return;
  }
  tasks.push({
    text: input.value,
    done: false,
    createDate: new Date().toISOString(),
    id: (tasks.length + 1).toString(),
    finishDate: null,
  });
  console.log(tasks);

  renderTasks(tasks);
  input.value = "";
}

export {createTask };