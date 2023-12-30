const userRouter = require("./user.router");
const healthRouter = require("./health.router");
const formRouter = require("./form.router");
const exerciseRouter = require("./exercise.router");
const dietRouter = require("./diet.router");
const eventRouter = require("./event.router");

const errorHandle = require("../middlewares/errorHandle");

module.exports = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/health", healthRouter);
  app.use("/api/form", formRouter);
  app.use("/api/exercise", exerciseRouter);
  app.use("/api/diet", dietRouter);
  app.use("/api/event", eventRouter);

  app.use(errorHandle);
};
