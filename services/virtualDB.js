const TodoList = [];

const getT = () => {
  return TodoList;
};

const addT = (todo) => {
  TodoList.push(todo);
  return;
};

const deleteT = (id) => {
  const index = TodoList.findIndex((item) => item.id === id);
  TodoList.splice(index, 1);
  return;
};

const editT = (todo) => {
  const index = TodoList.findIndex((item) => item.id === todo.id);
  TodoList[index] = todo;
  return;
};

module.exports = {
  getT,
  addT,
  deleteT,
  editT,
};
