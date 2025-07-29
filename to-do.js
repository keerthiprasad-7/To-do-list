const todoList = [];

function addTodo() {
  const input = document.querySelector('.todo-input');
  const dateInput = document.querySelector('.todo-date');
  const timeInput = document.querySelector('.todo-time');
  const task = input.value.trim();
  const date = dateInput.value;
  const time = timeInput.value;

  if (!task) return;

  todoList.push({ task, date, time, done: false });

  // Clear inputs
  input.value = '';
  dateInput.value = '';
  timeInput.value = '';

  renderTodos();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodos();
}

function toggleDone(index) {
  todoList[index].done = !todoList[index].done;
  renderTodos();
}

function renderTodos() {
  const listContainer = document.getElementById('todoList');
  listContainer.innerHTML = '';

  todoList.forEach((item, index) => {
    const isChecked = item.done ? 'checked' : '';
    const textStyle = item.done ? 'text-decoration: line-through; opacity: 0.6;' : '';

    const todoHTML = `
      <div class="todo-item">
        <input type="checkbox" onclick="toggleDone(${index})" ${isChecked} />
        <div class="todo-text" style="${textStyle}">
          <strong>${item.task}</strong>
          <small>${item.date || ''} ${item.time || ''}</small>
        </div>
        <div class="todo-buttons">
          <button onclick="deleteTodo(${index})">Delete</button>
        </div>
      </div>
    `;
    listContainer.innerHTML += todoHTML;
  });
}
