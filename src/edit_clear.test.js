const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const updateListLStorage = require('./update_todo.js');

let store = {};

const fakeLocalStorage = () => ({
  getItem(key) {
    return store[key] || null;
  },
  setItem(key, value) {
    store[key] = value.toString();
  },
  removeItem(key) {
    delete store[key];
  },
  clear() {
    store = {};
  },
});

Object.defineProperty(window, 'localStorage', {
  value: fakeLocalStorage,
});

describe('Set local storage item', () => {
  const dom = new JSDOM(
    `<html>
    <body>  
    </body>
  </html>`,
    { url: 'http://localhost' },
  );

  global.window = dom.window;
  global.document = dom.window.document;

  beforeEach(() => {
    dom.innerHTML = `<body>
  <script>document.body.appendChild(document.createElement("li"));</script>
</body>`;
  });

  afterEach(() => {
    // Clean up any changes made to the DOM
    const itemContainer = dom.window.document.body;
    itemContainer.innerHTML = '';
  });

  describe('Tests for updateListLStorage function', () => {
    // Tests that the description of a todo item is updated in localStorage.
    const dom = new JSDOM(
      `<html>
      <body>  
      </body>
    </html>`,
      { url: 'http://localhost' },
    );

    global.window = dom.window;
    global.document = dom.window.document;

    beforeEach(() => {
      dom.innerHTML = `<body>
    <script>document.body.appendChild(document.createElement("li"));</script>
  </body>`;
    });

    afterEach(() => {
      // Clean up any changes made to the DOM
      const itemContainer = dom.window.document.body;
      itemContainer.innerHTML = '';
    });

    test('should update description of a task in localStorage', () => {
      // Arrange
      const todos = [
        { description: 'Task 1', completed: false },
        { description: 'Task 2', completed: true },
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
      const editedtext = 'Edited Task 1';
      const index = 0;

      // Act
      updateListLStorage(index, todos, editedtext);

      // Assert
      const updatedTodos = JSON.parse(localStorage.getItem('todos'));
      expect(updatedTodos[index].description).toBe(editedtext);
    });

    // Tests that the function handles an out of bounds index.
    test('should handle an out of bounds index', () => {
      // Arrange
      const todos = [
        { description: 'Task 1', completed: false },
        { description: 'Task 2', completed: true },
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
      const editedtext = 'Edited Task 3';
      const index = 2;

      // Act
      updateListLStorage(index, todos, editedtext);

      // Assert
      const updatedTodos = JSON.parse(localStorage.getItem('todos'));
      expect(updatedTodos).toEqual(todos);
    });
  });
});
