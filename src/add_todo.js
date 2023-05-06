export default function addTodo(todos) {

  if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  const description = document.getElementById('target_todo').value;
  const newTodo = { description, completed: false };
  todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));
  window.location.reload();
}