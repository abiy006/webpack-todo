const displayTodos = require('./viewtodo');

let store = {};
const fakeLocalStorage = (function() {
    
  
    return {
      getItem: function(key) {
        return store[key] || null;
      },
      setItem: function(key, value) {
        store[key] = value.toString();
      },
      removeItem: function(key) {
        delete store[key];
      },
      clear: function() {
        store = {};
      }
    };
  })();

  Object.defineProperty(window, 'localStorage', {
    value: fakeLocalStorage
  });

describe('Set local storage item', () => {
    beforeAll(() => {
      Object.defineProperty(window, 'localStorage', {
        value: fakeLocalStorage,
      });
    });
  
    test('Check addTodo able add todo to todoList', () => {
        const mockJson = { description: "fake-value 123", completed: false };
        addTodo(mockJson);

        displayTodos(mockJson); 
    //   document.body.innerHTML = `
    //     <input id="newTodoInput" />
    //     `;

        const todolist = document.getElementById('mytodo');
      
        expect(todolist.innerHTML).toBe('<li>New todolist!</li>');


    });
  });
