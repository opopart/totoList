const Router = require("koa-router");
const controller = require("./controller");
const router = new Router();

router.get("/list", async (ctx, next) => {
  await controller.getTodoList(ctx);
});

router.post("/add", async (ctx, next) => {
  console.log(ctx, "cte");
  await controller.addTodo(ctx);
});

router.post("/delete", async (ctx, next) => {
  await controller.deleteTodo(ctx);
});

router.post("/edit", async (ctx, next) => {
  await controller.editTodo(ctx);
});

module.exports = router;
