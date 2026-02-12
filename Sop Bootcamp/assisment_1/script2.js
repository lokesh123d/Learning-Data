const addTaskInput = document.querySelector(".taskInput");
const priorityInput = document.querySelector(".taskCategory");
const addBtn = document.querySelector(".addBtn");
const pendingList = document.querySelector(".pendingList");
const completedList = document.querySelector(".completedList");
const pendingCount = document.querySelector(".pendingCount");
const completedCount = document.querySelector(".completedCount");
const totalCount = document.querySelector(".totalCount");
let allTasks = [];
addBtn.addEventListener("click", () => {
    const text = addTaskInput.value.trim();
    const priority = priorityInput.value;
    if (text === "") return;
    allTasks.push({ text, priority, type: "pending" });
    addTaskInput.value = "";
    renderTasks();
});
function renderTasks() {
    pendingList.innerHTML = "";
    completedList.innerHTML = "";
    let pending = 0;
    let completed = 0;
    allTasks.forEach((task, index) => {
        const card = document.createElement("div");
        card.className = `task-card priority-${task.priority}`;
        card.dataset.index = index;
        const title = document.createElement("h3");
        title.textContent = task.text;
        const p = document.createElement("p");
        p.textContent = `Priority: ${task.priority}`;
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.className = "complete-btn";
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        card.append(title, p, completeBtn, editBtn, deleteBtn);
        if (task.type === "pending") {
            pendingList.appendChild(card);
            pending++;
        } else {
            completedList.appendChild(card);
            completed++;
        }
        completeBtn.addEventListener("click", () => {
            allTasks[index].type = "complete";
            renderTasks();
        });
        deleteBtn.addEventListener("click", () => {
            allTasks.splice(index, 1);
            renderTasks();
        });
        editBtn.addEventListener("click", () => {
            const input = document.createElement("input");
            input.value = task.text;
            input.className = "edit-input-inline";
            title.replaceWith(input);
            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    allTasks[index].text = input.value.trim() || task.text;
                    renderTasks();
                }
            });
        });
    });
    pendingCount.textContent = `Pending: ${pending}`;
    completedCount.textContent = `Completed: ${completed}`;
    totalCount.textContent = `Total: ${pending + completed}`;
}
