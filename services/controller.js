const services = require("./services");

const getTodoList = async (ctx) => {
  let data;
  try {
    data = await services.getTodoList();
  } catch (e) {
    ctx.response.status = 500;
    data = {
      msg: "fail",
    };
  }
  ctx.body = data;
};

const addTodo = async (ctx) => {
  let data;
  try {
    console.log(ctx.request.body, "111");
    data = await services.addTodo(ctx.request.body);
  } catch (e) {
    ctx.response.status = 500;
    data = {
      msg: "fail",
    };
  }
  ctx.body = data;
};

const deleteTodo = async (ctx) => {
  let data;
  try {
    const { id } = ctx.request.body;
    data = await services.deleteTodo(id);
  } catch (e) {
    ctx.response.status = 500;
    data = {
      msg: "fail",
    };
  }
  ctx.body = data;
};

const editTodo = async (ctx) => {
  let data;
  try {
    data = await services.editTodo(ctx.request.body);
  } catch (e) {
    ctx.response.status = 500;
    data = {
      msg: "fail",
    };
  }
  ctx.body = data;
};

module.exports = {
  getTodoList,
  addTodo,
  deleteTodo,
  editTodo,
};
