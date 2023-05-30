const express = require("express");

<<<<<<< HEAD
// step 1
const connect = require("./configs/db");
=======

// step 1
const connect = require("./configs/db")


// ************************************************
>>>>>>> c8abfcf69501414e24cbfd07b7a49010e079b53f

const app = express();

app.use(express.json());

<<<<<<< HEAD
const userController = require("./controllers/user.controller");

app.use("/users", userController);

app.listen(2323, async () => {
  await connect();
  console.log("I am listening 2349");
});
=======

const userController = require("./controllers/user.controller")

app.use("/users", userController)


app.listen(2323, async ()=> {
    await connect();
    console.log("I am listening 2349")
})
>>>>>>> c8abfcf69501414e24cbfd07b7a49010e079b53f
