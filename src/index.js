import './style.css';
import TodoList from './display_todo.js';
import displayTodos from './view_todo.js';
import { todos } from './array_todo.js';

const todolist = new TodoList(todos);
displayTodos(todos);
