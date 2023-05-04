import './style.css';

const arrayToDo = [
  {
    index: 1,
    description: 'get up',
    completed: true,
  },
  {
    index: 2,
    description: 'wash the dish',
    completed: false,
  },
  {
    index: 3,
    description: 'complete To Do list project',
    completed: false,
  },
];

function createMyToDo() {
  const mytodoo = document.getElementById('mytodo');
  // const h1 = document.getElementById('h1id');
  // h1.textContent = "Today's To Do";
  // h1.style.display = 'flex';
  // h1.style.height = '3rem';
  // h1.style.fontSize = '3rem';
  // h1.style.alignItems = 'center';
  // h1.style.borderBottom = '1px solid gray';
  // mytodoo.appendChild(h1);

  const p1 = document.createElement('p');
  p1.textContent = 'Add to your list...';
  p1.style.fontStyle = 'italic';
  p1.style.display = 'flex';
  p1.style.height = '3rem';
  p1.style.alignItems = 'center';
  p1.style.borderBottom = '1px solid gray';
  mytodoo.appendChild(p1);

  for (let i = 0; i < arrayToDo.length; i += 1) {
    const listItem = document.createElement('div');
    listItem.style.display = 'flex';
    listItem.style.height = '3rem';
    listItem.style.alignItems = 'center';
    listItem.style.borderBottom = '1px solid gray';

    const li = document.createElement('li');
    li.textContent = arrayToDo[i].description;

    const mychkbox = document.createElement('input');
    mychkbox.type = 'checkbox';
    // mychkbox.value = 'yes';
    mychkbox.style.marginRight = '1rem';

    listItem.appendChild(mychkbox);
    listItem.appendChild(li);

    mytodoo.appendChild(listItem);
  }

  const p2 = document.createElement('p');
  p2.textContent = 'Clear all completed';
  p2.style.display = 'flex';
  p2.style.height = '3rem';
  p2.style.alignItems = 'center';
  p2.style.borderBottom = '1px solid gray';
  p2.style.backgroundColor = '#ccc';
  mytodoo.appendChild(p2);
}

createMyToDo();
