const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const addTodo = require('./add_todo.js');

let store = {};
// const fakeLocalStorage = (function () {
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

  test('data is added into local storage', () => {
    const mockJson = { description: 'fake-value 123', completed: false };
    addTodo(mockJson);
    expect(window.localStorage.getItem('todos')).toEqual(JSON.stringify(mockJson));
  });

  // Check if an element with the expected text content was added to the DOM
  const addedItem = dom.window.document.body.children[0];
  expect(addedItem).not.toBeNull();
});
