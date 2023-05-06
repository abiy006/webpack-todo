import displayTodos from './view_todo.js';

export default class TodoList {
  constructor(todos) {
    if (localStorage.getItem('todos')) {
      todos = JSON.parse(localStorage.getItem('todos'));
    }

    displayTodos(todos);
  }
}