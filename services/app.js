const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const app = new Koa();

app.use(bodyParser());
app.use(require("./router").routes());

app.on("error", (err, ctx) => console.error("server error", err));

app.listen(6342, () => {
  console.log("server is running at http://localhost:6342");
});
