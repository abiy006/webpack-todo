const addTodo = require('./add_todo');
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
  
    test('data is added into local storage', () => {
        const mockJson = { description: "fake-value 123", completed: false };
        addTodo(mockJson);
      expect(window.localStorage.getItem('todos')).toEqual(JSON.stringify(mockJson));
    });

    test('check if a new element is added', () => {
  
      // Check if an element with the expected text content was added to the DOM
      const addedItem = document.querySelector('#list-item-container').children[0];
  
      expect(addedItem).not.toBeNull();
    });

  });
