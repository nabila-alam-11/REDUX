import { createStore } from "redux";
import taskReducer from "../taskReducer";
import {
  addTask,
  calculateTotalTasks,
  removeTask,
  toggleTask,
} from "../actions";

const store = createStore(taskReducer);

store.subscribe(() => {
  console.log(store.getState());
  renderTasks();
});

// store.dispatch(
//   addTask({
//     id: 1,
//     task: "Buy Stationery",
//     details: "Buy Stationery for new class.",
//   })
// );

// store.dispatch(
//   addTask({ id: 2, task: "Put labels ", details: "Put labels on new notebook" })
// );
// store.dispatch(
//   addTask({
//     id: 3,
//     task: "Put labels ",
//     details: "Put labels on new notebook",
//     completed: false,
//   })
// );

// store.dispatch(calculateTotalTasks());
// store.dispatch(toggleTask(1));

// store.dispatch(removeTask(2));

const addTaskBtn = document.querySelector("#add-task-btn");
const removeTaskBtn = document.querySelector("#remove-task-btn");

const createTask = () => {
  const { tasks } = store.getState();
  const id = tasks.length + 1;
  const task = document.querySelector("#taskInput").value;
  const details = document.querySelector("#taskDetailsInput").value;
  if (id && task && details) {
    store.dispatch(addTask({ id, task, details }));
    store.dispatch(calculateTotalTasks());
  }
};
addTaskBtn.addEventListener("click", createTask);

const deleteTask = () => {
  const id = parseInt(document.querySelector("#removeTaskInput").value);
  if (id) {
    store.dispatch(removeTask(id));
    store.dispatch(calculateTotalTasks());
  }
};
removeTaskBtn.addEventListener("click", deleteTask);

function renderTasks() {
  const tasksContainer = document.querySelector("#tasks-container");
  const { tasks, totalTasks } = store.getState();
  tasksContainer.innerHTML = tasks
    .map((task) => {
      return `<li>
      <input type="checkbox" class="task-checkbox" data-id="${task.id}" ${
        task.completed ? "checked" : ""
      }      id="completed"/>${task.id}.${task.task}: ${task.details} ${
        task.completed ? ":Completed" : ""
      }</li>`;
    })
    .join("");

  const checkboxes = document.querySelectorAll(".task-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      store.dispatch(toggleTask(id));
    });
  });
  document.querySelector(
    "#total-tasks"
  ).innerHTML = `Total Tasks: ${totalTasks}`;
}

renderTasks();
