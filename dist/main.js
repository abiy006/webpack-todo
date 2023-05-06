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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearCompletedChkBox\": () => (/* binding */ clearCompletedChkBox),\n/* harmony export */   \"toggleChkBox\": () => (/* binding */ toggleChkBox)\n/* harmony export */ });\nfunction toggleChkBox(todos, index) {\r\n  todos[index].completed = !todos[index].completed;\r\n  localStorage.setItem('todos', JSON.stringify(todos));\r\n}\r\n\r\nconst clearCompletedChkBox = (todos) => {\r\n    todos = todos.filter((todo) => !todo.completed);\r\n    localStorage.setItem('todos', JSON.stringify(todos));\r\n    window.location.reload();\r\n};\n\n//# sourceURL=webpack://webpack-todo/./src/checkbox_todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _viewtodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewtodo.js */ \"./src/viewtodo.js\");\n/* harmony import */ var _array_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array_todo.js */ \"./src/array_todo.js\");\n\r\n\r\n\r\nclass TodoList {\r\n  constructor(todos) {\r\n    if (localStorage.getItem('todos')) {\r\n      todos = JSON.parse(localStorage.getItem('todos'));\r\n    }\r\n    (0,_viewtodo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todos);\r\n  }\r\n}\r\nfunction myfunc() {\r\n  return new TodoList(_array_todo_js__WEBPACK_IMPORTED_MODULE_1__.todos);\r\n}\r\n\r\nmyfunc();\r\n\n\n//# sourceURL=webpack://webpack-todo/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayTodos)\n/* harmony export */ });\n/* harmony import */ var _add_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_todo.js */ \"./src/add_todo.js\");\n/* harmony import */ var _remove_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove_todo.js */ \"./src/remove_todo.js\");\n/* harmony import */ var _checkbox_todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox_todo.js */ \"./src/checkbox_todo.js\");\n\r\n\r\n\r\n\r\nfunction displayTodos(todos) {\r\n  const todoList = document.getElementById('mytodo');\r\n\r\n  todoList.className = 'todoList';\r\n  todoList.innerHTML = '';\r\n  const todoHeader = document.createElement('h1');\r\n  todoHeader.innerHTML = \"Today's To Do\";\r\n  todoList.appendChild(todoHeader);\r\n  const form = document.createElement('form');\r\n  form.style.display = 'flex';\r\n  form.style.width = '50%';\r\n  form.addEventListener('submit', () => { (0,_add_todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todos); });\r\n  const input1 = document.createElement('input');\r\n  input1.id = 'target_todo';\r\n  input1.type = 'text';\r\n  input1.placeholder = 'Add to your list...';\r\n  input1.style.fontStyle = 'italic';\r\n  input1.style.display = 'flex';\r\n  input1.style.height = '2rem';\r\n  input1.style.width = '100%';\r\n  input1.style.alignItems = 'center';\r\n  form.appendChild(input1);\r\n  todoList.appendChild(form);\r\n\r\n  todos.forEach((todo, index) => {\r\n    const chkbox = document.createElement('input');\r\n    chkbox.type = 'checkbox';\r\n    if (todo.completed) {\r\n      chkbox.checked = true;\r\n    } else {\r\n      chkbox.checked = false;\r\n    }\r\n    chkbox.addEventListener('click', () => {\r\n      (0,_checkbox_todo_js__WEBPACK_IMPORTED_MODULE_2__.toggleChkBox)(todos, index);\r\n    });\r\n\r\n    const li = document.createElement('li');\r\n    li.className = 'mytodolist';\r\n    li.style.width = '50%';\r\n    li.style.height = '3rem';\r\n    li.style.display = 'flex';\r\n    li.style.justifyContent = 'space-between';\r\n    li.style.alignItems = 'center';\r\n    const desc = document.createElement('p');\r\n    desc.style.display = 'flex';\r\n    desc.style.justifyContent = 'center';\r\n    desc.style.width = '100%';\r\n    desc.setAttribute('class', 'addedListItem');\r\n    desc.textContent = todo.description;\r\n    desc.addEventListener('click', () => {\r\n      const form1 = document.createElement('form');\r\n      form1.id = `form${index}`;\r\n      const input2 = document.createElement('input');\r\n      input2.type = 'text';\r\n      input2.id = `input${index}`;\r\n      input2.value = todo.description;\r\n      li.replaceChild(form1, desc);\r\n      form1.appendChild(input2);\r\n      li.addEventListener('submit', () => {\r\n        const editedtext = document.getElementById(`input${index}`).value;\r\n        todos[index].description = editedtext;\r\n        localStorage.setItem('todos', JSON.stringify(todos));\r\n      });\r\n    });\r\n\r\n    const rmBtn = document.createElement('input');\r\n    rmBtn.type = 'button';\r\n    rmBtn.style.margin = '1rem';\r\n    rmBtn.setAttribute('class', 'removeListItem');\r\n    rmBtn.setAttribute('data-index', `${index}`);\r\n    rmBtn.value = 'Remove';\r\n    rmBtn.addEventListener('click', () => {\r\n      (0,_remove_todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`${index}`, todos);\r\n    });\r\n\r\n    li.appendChild(chkbox);\r\n    li.appendChild(desc);\r\n    li.appendChild(rmBtn);\r\n    if (index % 2 === 0) {\r\n      li.style.backgroundColor = 'gray';\r\n    } else {\r\n      li.style.backgroundColor = '#ccc';\r\n    }\r\n    todoList.appendChild(li);\r\n  });\r\n\r\n  const clearAllBtn = document.createElement('input');\r\n  clearAllBtn.type = 'button';\r\n  clearAllBtn.setAttribute('class', 'clearAllBtn');\r\n  clearAllBtn.value = 'Clear all completed';\r\n  clearAllBtn.style.display = 'flex';\r\n  clearAllBtn.style.height = '3rem';\r\n  clearAllBtn.style.padding = '1rem';\r\n  clearAllBtn.style.width = '50%';\r\n  clearAllBtn.style.justifyContent = 'center';\r\n  clearAllBtn.addEventListener('click', () => {\r\n    (0,_checkbox_todo_js__WEBPACK_IMPORTED_MODULE_2__.clearCompletedChkBox)(todos);\r\n  });\r\n  todoList.appendChild(clearAllBtn);\r\n}\n\n//# sourceURL=webpack://webpack-todo/./src/viewtodo.js?");

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