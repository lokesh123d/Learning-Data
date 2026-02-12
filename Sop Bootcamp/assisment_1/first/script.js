const domElements = {
    taskInput: document.querySelector('#taskInput'),
    priorityInput: document.querySelector('#priorityInput'),
    addTaskButton: document.querySelector('#addBtn'),
    pendingTasksContainer: document.querySelector('#pendingList'),
    completedTasksContainer: document.querySelector('#completedList'),
    totalCount: document.querySelector('#totalCount'),
    pendingCount: document.querySelector('#pendingCount'),
    completedCount: document.querySelector('#completedCount')
};

let taskIdCounter = 0;

domElements.addTaskButton.addEventListener('click', function () {
    const taskText = domElements.taskInput.value.trim();
    const priority = domElements.priorityInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    addTask(taskText, priority);
    domElements.taskInput.value = ''; 
});

function addTask(taskText, priority) {
    taskIdCounter++;

    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(priority);
    card.dataset.taskId = taskIdCounter;
    card.dataset.status = 'pending';
    card.dataset.priority = priority;

    const taskName = document.createElement('span');
    taskName.classList.add('task-name');
    taskName.textContent = taskText;

    const priorityBadge = document.createElement('span');
    priorityBadge.classList.add('priority-badge');
    priorityBadge.textContent = priority.toUpperCase();

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.textContent = 'Complete';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';

    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);

    card.appendChild(taskName);
    card.appendChild(priorityBadge);
    card.appendChild(buttonContainer);

    // Add to pending list
    domElements.pendingTasksContainer.appendChild(card);

    // Update counts
    updateCounts();
}

// Step 2: Task Status and DOM Traversing
// Step 3: Event Delegation - Single event listener on parent container
document.querySelector('.board').addEventListener('click', function (e) {
    const target = e.target;

    // Delete button clicked
    if (target.classList.contains('delete-btn')) {
        const card = target.closest('.card');
        card.remove();
        updateCounts();
    }

    // Complete button clicked
    else if (target.classList.contains('complete-btn')) {
        const card = target.closest('.card');

        // Visual update
        card.classList.add('completed');
        card.dataset.status = 'completed';

        // Move to completed section using DOM traversing
        const completedList = document.querySelector('#completedList');
        completedList.appendChild(card);

        // Update button
        target.textContent = 'Undo';
        target.classList.remove('complete-btn');
        target.classList.add('undo-btn');

        updateCounts();
    }

    // Undo button clicked
    else if (target.classList.contains('undo-btn')) {
        const card = target.closest('.card');

        card.classList.remove('completed');
        card.dataset.status = 'pending';

        // Move back to pending
        const pendingList = document.querySelector('#pendingList');
        pendingList.appendChild(card);

        // Update button
        target.textContent = 'Complete';
        target.classList.remove('undo-btn');
        target.classList.add('complete-btn');

        updateCounts();
    }

    // Edit functionality with inline input editing
    else if (target.classList.contains('task-name')) {
        const card = target.closest('.card');

        // Ensure only one task can be edited at a time
        const existingInput = document.querySelector('.editing-input');
        if (existingInput) {
            return;
        }

        const currentText = target.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        input.classList.add('editing-input');

        target.replaceWith(input);
        input.focus();

        input.addEventListener('blur', function () {
            const newText = input.value.trim() || currentText;
            const newSpan = document.createElement('span');
            newSpan.classList.add('task-name');
            newSpan.textContent = newText;
            input.replaceWith(newSpan);
        });

        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                input.blur();
            }
        });
    }

    // Priority selector - Add dynamic priority selector
    else if (target.classList.contains('priority-badge')) {
        const card = target.closest('.card');
        const currentPriority = card.dataset.priority;

        const select = document.createElement('select');
        select.classList.add('priority-selector');

        ['low', 'medium', 'high'].forEach(p => {
            const option = document.createElement('option');
            option.value = p;
            option.textContent = p.toUpperCase();
            if (p === currentPriority) option.selected = true;
            select.appendChild(option);
        });

        target.replaceWith(select);
        select.focus();

        select.addEventListener('change', function () {
            const newPriority = select.value;
            card.dataset.priority = newPriority;
            card.className = 'card ' + newPriority;

            const newBadge = document.createElement('span');
            newBadge.classList.add('priority-badge');
            newBadge.textContent = newPriority.toUpperCase();
            select.replaceWith(newBadge);
        });

        select.addEventListener('blur', function () {
            const newBadge = document.createElement('span');
            newBadge.classList.add('priority-badge');
            newBadge.textContent = currentPriority.toUpperCase();
            select.replaceWith(newBadge);
        });
    }
});

// Maintain counts for total, completed, and pending tasks
function updateCounts() {
    const allTasks = document.querySelectorAll('.card');
    const pendingTasks = document.querySelectorAll('.card[data-status="pending"]');
    const completedTasks = document.querySelectorAll('.card[data-status="completed"]');

    domElements.totalCount.textContent = `Total: ${allTasks.length}`;
    domElements.pendingCount.textContent = `Pending: ${pendingTasks.length}`;
    domElements.completedCount.textContent = `Completed: ${completedTasks.length}`;
}