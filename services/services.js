const { getT, addT, deleteT, editT } = require("./virtualDB.js");

const getTodoList = async () => {
  return new Promise((resolve, reject) => {
    resolve(getT());
  });
};

const addTodo = async (data) => {
  return new Promise((resolve, reject) => {
    console.log(data);
    addT(data);
    resolve({
      msg: `success`,
    });
  });
};

const deleteTodo = async (id) => {
  return new Promise((resolve, reject) => {
    deleteT(id);
    resolve({
      msg: "success",
    });
  });
};

const editTodo = async (data) => {
  return new Promise((resolve, reject) => {
    editT(data);
    resolve({
      msg: "success",
    });
  });
};

module.exports = {
  getTodoList,
  addTodo,
  deleteTodo,
  editTodo,
};
