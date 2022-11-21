const express = require("express");

// step 1
const connect = require("./configs/db");

const app = express();

app.use(express.json());

const userController = require("./controllers/user.controller");

app.use("/users", userController);

app.listen(2323, async () => {
  await connect();
  console.log("I am listening 2349");
});
