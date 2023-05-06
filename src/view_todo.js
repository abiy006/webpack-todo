import addTodo from './add_todo.js';
import removeTheList from './remove_todo.js';

export default function displayTodos(todos) {
  const todoList = document.getElementById('mytodo');

  todoList.className = 'todoList';
  todoList.innerHTML = '';
  const todoHeader = document.createElement('h1');
  todoHeader.innerHTML = "Today's To Do";
  todoList.appendChild(todoHeader);
  const form = document.createElement('form');
  form.addEventListener('submit', addTodo.bind(todos));
  const input1 = document.createElement('input');
  input1.id = 'target_todo';
  input1.type = 'text';
  input1.placeholder = 'Add to your list...';
  input1.style.fontStyle = 'italic';
  input1.style.display = 'flex';
  input1.style.height = '2rem';
  input1.style.width = '50%';
  input1.style.alignItems = 'center';
  form.appendChild(input1);
  todoList.appendChild(form);
  todos.forEach((todo, index) => {
    const chkbox = document.createElement('input');
    chkbox.type = 'checkbox';
    if (todo.completed) {
      chkbox.checked = true;
    } else {
      chkbox.checked = false;
    }

    const li = document.createElement('li');
    li.className = 'mytodolist';
    li.style.width = '50%';
    li.style.height = '2rem';
    li.style.padding = '1rem';
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    const desc = document.createElement('p');
    desc.style.display = 'flex';
    desc.style.justifyContent = 'center';
    desc.style.width = '100%';
    desc.setAttribute('class', 'addedListItem');
    desc.textContent = todo.description;
    desc.addEventListener('click', () => {
      const form1 = document.createElement('form');
      form1.id = `form${index}`;
      const input2 = document.createElement('input');
      input2.type = 'text';
      input2.id = `input${index}`;
      input2.value = todo.description;
      li.replaceChild(form1, desc);
      form1.appendChild(input2);
      li.addEventListener('submit', () => {
        const editedtext = document.getElementById(`input${index}`).value;
        todos[index].description = editedtext;
        localStorage.setItem('todos', JSON.stringify(todos));
      });
    });

    const rmBtn = document.createElement('input');
    rmBtn.type = 'button';
    rmBtn.setAttribute('class', 'removeListItem');
    rmBtn.setAttribute('data-index', `${index}`);
    rmBtn.value = 'Remove';
    rmBtn.addEventListener('click', () => {
      removeTheList(`${index}`, todos);
    });

    li.appendChild(chkbox);
    li.appendChild(desc);
    li.appendChild(rmBtn);
    if (index % 2 === 0) {
      li.style.backgroundColor = 'gray';
    } else {
      li.style.backgroundColor = '#ccc';
    }
    todoList.appendChild(li);
  });
}