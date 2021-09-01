//get the selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.todo-filter');
// add event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(event) {
  event.preventDefault();
  //check if there is a value in input
  if (todoInput.value != '') {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    const checkedBtn = document.createElement('button');
    checkedBtn.classList.add('check-btn');
    checkedBtn.innerHTML = '<i class= "fas fa-check"> </i>';

    todoDiv.appendChild(checkedBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '<i class= "fas fa-trash"> </i>';

    todoDiv.appendChild(deleteBtn);
    todoList.appendChild(todoDiv);
    //clear todoInput value
    todoInput.value = '';
  }
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === 'delete-btn') {
    const todo = item.parentElement;
    todo.remove();
  }

  if (item.classList[0] === 'check-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('checked');
    todo.classList.add('fall');
    todo.addEventListener('transitionend', () => {
      todo.remove();
    });
  }
}

function filterTodo(e) {}
