document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const priority = document.getElementById('prioritySelect').value;

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.className = `list-group-item d-flex justify-content-between align-items-center ${priority}`;
        li.innerHTML = `
            ${taskInput.value}
            <span>
                <button class="btn btn-sm btn-success complete-btn">Complete</button>
                <button class="btn btn-sm btn-danger delete-btn">Delete</button>
            </span>
        `;

        if (priority === 'high') {
            taskList.insertBefore(li, taskList.firstChild);
        } else if (priority === 'medium' && taskList.querySelector('.low')) {
            taskList.insertBefore(li, taskList.querySelector('.low'));
        } else {
            taskList.appendChild(li);
        }

        taskInput.value = '';

        li.querySelector('.complete-btn').addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.querySelector('.delete-btn').addEventListener('click', function() {
            taskList.removeChild(li);
        });
    }
});
