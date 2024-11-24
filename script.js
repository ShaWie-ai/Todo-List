const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

const taskStack = []; 

function addTask() {
    const task = taskInput.value.trim();
    if (!task) {
        return alert("Task cannot be empty!")
    };
    taskStack.push(task);
    taskInput.value = ""; 
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = taskStack.map((task, index) =>
        `<li>${task} <button onclick="removeTask(${index})">Remove</button></li>`
    ).join("");
}

function removeTask(index) {
    taskStack.splice(index, 1);
    renderTasks();
}

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", e => e.key === "Enter" && addTask());
