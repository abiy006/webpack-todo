// export default function removeTheList(myv, todos) {
function removeTheList(myv, todos) {
  // todos.splice(myv, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  // window.location.reload();
}

module.exports = removeTheList;