function updateList(desc, index, todo, todos, li) {
  
    desc.addEventListener('click', () => {
      const form1 = document.createElement('form');
      form1.id = `form${index}`;
      const input2 = document.createElement('input');
      input2.type = 'text';
      input2.id = `input${index}`;
      input2.value = todo.description;
      li.replaceChild(form1, desc);
      form1.appendChild(input2);
      li.addEventListener('submit', () => {
        const editedtext = document.getElementById(`input${index}`).value;
        todos[index].description = editedtext;
        localStorage.setItem('todos', JSON.stringify(todos));
      });
    });
  }

  module.exports = updateList;