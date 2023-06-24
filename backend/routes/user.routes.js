const express = require("express");
const controller = require("../controller/user.controller");

const userRouter = express.Router();

userRouter.post("/register", controller.register);
userRouter.post("/login", controller.login);
userRouter.get("/allusers", controller.allusers);
userRouter.post("/queAnsfeed", controller.queAnsfeed);
userRouter.get("/current-user", controller.getCurrentUser);
module.exports = {
  userRouter,
};
