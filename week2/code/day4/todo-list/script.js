const addButton = document.getElementById('add-button');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('my-tasks') ?? '[]');

const addTask = function(task, storage = true) {
    if (task.trim() === '') {
        return;
    }
    
    const item = document.createElement('div');
    item.className = 'task-item';
    item.innerHTML = `
        <span>${task}</span>
        <button class="delete-button">Delete</button>
    `;
    taskList.prepend(item);

    if (storage) {
        tasks.push(task);
        localStorage.setItem('my-tasks', JSON.stringify(tasks));
    }

    const deleteButton = item.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
        if (confirm('Are you sure you want to delete this task?')) {
            item.remove();
            tasks = tasks.filter(t => t !== task);
            localStorage.setItem('my-tasks', JSON.stringify(tasks));
        }
    });
};

tasks.forEach (function (task) {
    addTask(task, storage = false);
});

addButton.addEventListener('click', function() {    
    addTask(input.value);
    input.value = '';
    input.focus();
});

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask(input.value);
        input.value = '';
    }
});

