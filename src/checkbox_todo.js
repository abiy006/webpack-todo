export function toggleChkBox(todos, index) {
  todos[index].completed = !todos[index].completed;
  localStorage.setItem('todos', JSON.stringify(todos));
}

export const clearCompletedChkBox = (todos) => {
  todos.forEach((todo, index) => {
    if (todo.completed) {
      todos.splice(index, 1);
    }
  });

  //   todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));
  window.location.reload();
};