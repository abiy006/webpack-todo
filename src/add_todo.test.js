/**
 * @jest-environment jsdom
 */

const addTodo = require('./add_todo');
let store = {};
const fakeLocalStorage = (function () {


  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: fakeLocalStorage
});

describe('Set local storage item', () => {

  

  beforeEach(() => {
    document.body.innerHTML = `
    <form class="mb-3" id="form">
    <input type="text" class="form-control" name="" id="new-todo" aria-describedby="helpId"
            placeholder="Add to your list ..">
    </form>    
    <div class="list-item-container" id="list-item-container"> 
    </div> `;
  });

  afterEach(() => {
    // Clean up any changes made to the DOM
    let itemContainer = window.document.getElementById('list-item-container');

    itemContainer.innerHTML = '';
  });

  test('data is added into local storage', () => {
    const mockJson = { description: "fake-value 123", completed: false };
    addTodo(mockJson);
    expect(window.localStorage.getItem('todos')).toEqual(JSON.stringify(mockJson));
  });

  // Check if an element with the expected text content was added to the DOM
  const addedItem = document.querySelector('.list-item-container').children[0];

  expect(addedItem).not.toBeNull();

});
