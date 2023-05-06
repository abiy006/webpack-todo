/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/add_todo.js":
/*!*************************!*\
  !*** ./src/add_todo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTodo)\n/* harmony export */ });\nfunction addTodo(todos) {\n  if (localStorage.getItem('todos')) {\n    todos = JSON.parse(localStorage.getItem('todos'));\n  }\n\n  const description = document.getElementById('target_todo').value;\n  const newTodo = { description, completed: false };\n  todos.push(newTodo);\n  localStorage.setItem('todos', JSON.stringify(todos));\n  window.location.reload();\n}\n\n//# sourceURL=webpack://webpack-todo/./src/add_todo.js?");

/***/ }),

/***/ "./src/array_todo.js":
/*!***************************!*\
  !*** ./src/array_todo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todos\": () => (/* binding */ todos),\n/* harmony export */   \"todos1\": () => (/* binding */ todos1)\n/* harmony export */ });\nconst todos = [];\nconst todos1 = [];\n\n//# sourceURL=webpack://webpack-todo/./src/array_todo.js?");

/***/ }),

/***/ "./src/checkbox_todo.js":
/*!******************************!*\
  !*** ./src/checkbox_todo.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearCompletedChkBox\": () => (/* binding */ clearCompletedChkBox),\n/* harmony export */   \"toggleChkBox\": () => (/* binding */ toggleChkBox)\n/* harmony export */ });\nfunction toggleChkBox(todos, index) {\n  todos[index].completed = !todos[index].completed;\n  localStorage.setItem('todos', JSON.stringify(todos));\n}\n\nconst clearCompletedChkBox = (todos) => {\n  todos.forEach((todo, index) => {\n    if (todo.completed) {\n      todos.splice(index, 1);\n    }\n  });\n\n  //   todos.push(newTodo);\n  localStorage.setItem('todos', JSON.stringify(todos));\n  window.location.reload();\n};\n\n//# sourceURL=webpack://webpack-todo/./src/checkbox_todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _viewtodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewtodo.js */ \"./src/viewtodo.js\");\n/* harmony import */ var _array_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array_todo.js */ \"./src/array_todo.js\");\n\n\n\nclass TodoList {\n  constructor(todos) {\n    if (localStorage.getItem('todos')) {\n      todos = JSON.parse(localStorage.getItem('todos'));\n    }\n    (0,_viewtodo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todos);\n  }\n}\nfunction myfunc() {\n  return new TodoList(_array_todo_js__WEBPACK_IMPORTED_MODULE_1__.todos);\n}\n\nmyfunc();\n\n\n//# sourceURL=webpack://webpack-todo/./src/index.js?");

/***/ }),

/***/ "./src/remove_todo.js":
/*!****************************!*\
  !*** ./src/remove_todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeTheList)\n/* harmony export */ });\nfunction removeTheList(myv, todos) {\n  todos.splice(myv, 1);\n  localStorage.setItem('todos', JSON.stringify(todos));\n  window.location.reload();\n}\n\n//# sourceURL=webpack://webpack-todo/./src/remove_todo.js?");

/***/ }),

/***/ "./src/viewtodo.js":
/*!*************************!*\
  !*** ./src/viewtodo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayTodos)\n/* harmony export */ });\n/* harmony import */ var _add_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_todo.js */ \"./src/add_todo.js\");\n/* harmony import */ var _remove_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove_todo.js */ \"./src/remove_todo.js\");\n/* harmony import */ var _checkbox_todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox_todo.js */ \"./src/checkbox_todo.js\");\n\n\n\n\nfunction displayTodos(todos) {\n  const todoList = document.getElementById('mytodo');\n\n  todoList.className = 'todoList';\n  todoList.innerHTML = '';\n  const todoHeader = document.createElement('h1');\n  todoHeader.innerHTML = \"Today's To Do\";\n  todoList.appendChild(todoHeader);\n  const form = document.createElement('form');\n  form.style.display = 'flex';\n  form.style.width = '50%';\n  form.addEventListener('submit', () => { (0,_add_todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todos); });\n  const input1 = document.createElement('input');\n  input1.id = 'target_todo';\n  input1.type = 'text';\n  input1.placeholder = 'Add to your list...';\n  input1.style.fontStyle = 'italic';\n  input1.style.display = 'flex';\n  input1.style.height = '2rem';\n  input1.style.width = '100%';\n  input1.style.alignItems = 'center';\n  form.appendChild(input1);\n  todoList.appendChild(form);\n\n  todos.forEach((todo, index) => {\n    const chkbox = document.createElement('input');\n    chkbox.type = 'checkbox';\n    if (todo.completed) {\n      chkbox.checked = true;\n    } else {\n      chkbox.checked = false;\n    }\n    chkbox.addEventListener('click', () => {\n      (0,_checkbox_todo_js__WEBPACK_IMPORTED_MODULE_2__.toggleChkBox)(todos, index);\n    });\n\n    const li = document.createElement('li');\n    li.className = 'mytodolist';\n    li.style.width = '50%';\n    li.style.height = '3rem';\n    li.style.display = 'flex';\n    li.style.justifyContent = 'space-between';\n    li.style.alignItems = 'center';\n    const desc = document.createElement('p');\n    desc.style.display = 'flex';\n    desc.style.justifyContent = 'center';\n    desc.style.width = '100%';\n    desc.setAttribute('class', 'addedListItem');\n    desc.textContent = todo.description;\n    desc.addEventListener('click', () => {\n      const form1 = document.createElement('form');\n      form1.id = `form${index}`;\n      const input2 = document.createElement('input');\n      input2.type = 'text';\n      input2.id = `input${index}`;\n      input2.value = todo.description;\n      li.replaceChild(form1, desc);\n      form1.appendChild(input2);\n      li.addEventListener('submit', () => {\n        const editedtext = document.getElementById(`input${index}`).value;\n        todos[index].description = editedtext;\n        localStorage.setItem('todos', JSON.stringify(todos));\n      });\n    });\n\n    const rmBtn = document.createElement('input');\n    rmBtn.type = 'button';\n    rmBtn.style.margin = '1rem';\n    rmBtn.setAttribute('class', 'removeListItem');\n    rmBtn.setAttribute('data-index', `${index}`);\n    rmBtn.value = 'Remove';\n    rmBtn.addEventListener('click', () => {\n      (0,_remove_todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`${index}`, todos);\n    });\n\n    li.appendChild(chkbox);\n    li.appendChild(desc);\n    li.appendChild(rmBtn);\n    if (index % 2 === 0) {\n      li.style.backgroundColor = 'gray';\n    } else {\n      li.style.backgroundColor = '#ccc';\n    }\n    todoList.appendChild(li);\n  });\n\n  const clearAllBtn = document.createElement('input');\n  clearAllBtn.type = 'button';\n  clearAllBtn.setAttribute('class', 'clearAllBtn');\n  clearAllBtn.value = 'Clear all completed';\n  clearAllBtn.style.display = 'flex';\n  clearAllBtn.style.height = '3rem';\n  clearAllBtn.style.padding = '1rem';\n  clearAllBtn.style.width = '50%';\n  clearAllBtn.style.justifyContent = 'center';\n  clearAllBtn.addEventListener('click', () => {\n    (0,_checkbox_todo_js__WEBPACK_IMPORTED_MODULE_2__.clearCompletedChkBox)(todos);\n  });\n  todoList.appendChild(clearAllBtn);\n}\n\n//# sourceURL=webpack://webpack-todo/./src/viewtodo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;