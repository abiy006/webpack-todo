const removeTheList = require('./remove_todo');
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
  
    test('Data is deleted from local storage', () => {
        const deletedIndex = 1;
        removeTheList(deletedIndex);
      expect(`${deletedIndex}`).toEqual(window.localStorage.getItem('todos'));
    });
  });