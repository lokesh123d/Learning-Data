const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const pendingTasks = document.getElementById('pendingTasks');
const completedTasks = document.getElementById('completedTasks');
const totalCount = document.getElementById('totalCount');
const pendingCount = document.getElementById('pendingCount');
const completedCount = document.getElementById('completedCount');

let editingTask = null;

function addTask() {
    const text = taskInput.value.trim();
    if (!text) {
        alert('Please enter a task!');
        return;
    }

    const card = document.createElement('div');
    card.className = 'task-card low-priority';
    card.innerHTML = `
        <div class="task-header">
            <span class="task-name">${text}</span>
            <select class="priority-selector">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
        <div class="task-actions">
            <button class="btn complete-btn">Complete</button>
            <button class="btn edit-btn">Edit</button>
            <button class="btn delete-btn">Delete</button>
        </div>
    `;

    pendingTasks.appendChild(card);
    taskInput.value = '';
    updateCounts();
}

function updateCounts() {
    const pending = pendingTasks.querySelectorAll('.task-card').length;
    const completed = completedTasks.querySelectorAll('.task-card').length;

    totalCount.textContent = pending + completed;
    pendingCount.textContent = pending;
    completedCount.textContent = completed;
}

pendingTasks.addEventListener('click', handleClick);
completedTasks.addEventListener('click', handleClick);

function handleClick(e) {
    const button = e.target;

    if (button.classList.contains('complete-btn')) {
        const card = button.parentElement.parentElement;
        card.classList.add('completed');
        card.querySelector('.complete-btn').remove();
        card.querySelector('.edit-btn').remove();
        completedTasks.appendChild(card);
        updateCounts();
    }

    else if (button.classList.contains('delete-btn')) {
        const card = button.parentElement.parentElement;
        card.remove();
        updateCounts();
    }

    else if (button.classList.contains('edit-btn')) {
        const card = button.parentElement.parentElement;

        if (editingTask && editingTask !== card) {
            alert('Please save the current task before editing another!');
            return;
        }

        const taskName = card.querySelector('.task-name');
        const taskHeader = card.querySelector('.task-header');
        const prioritySelect = card.querySelector('.priority-selector');

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'task-edit-input';
        input.value = taskName.textContent;

        taskName.classList.add('editing');
        taskHeader.insertBefore(input, prioritySelect);

        button.textContent = 'Save';
        button.classList.remove('edit-btn');
        button.classList.add('save-btn');

        editingTask = card;
        input.focus();
    }

    else if (button.classList.contains('save-btn')) {
        const card = button.parentElement.parentElement;
        const input = card.querySelector('.task-edit-input');
        const taskName = card.querySelector('.task-name');
        const newText = input.value.trim();

        if (!newText) {
            alert('Task cannot be empty!');
            return;
        }

        taskName.textContent = newText;
        taskName.classList.remove('editing');
        input.remove();

        button.textContent = 'Edit';
        button.classList.remove('save-btn');
        button.classList.add('edit-btn');

        editingTask = null;
    }
}

pendingTasks.addEventListener('change', handlePriorityChange);

function handlePriorityChange(e) {
    if (e.target.classList.contains('priority-selector')) {
        const card = e.target.parentElement.parentElement;
        card.classList.remove('low-priority', 'medium-priority', 'high-priority');
        card.classList.add(e.target.value + '-priority');
    }
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

updateCounts();
