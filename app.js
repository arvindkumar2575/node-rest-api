const express = require("express");
const mongoose = require("mongoose");
const app = express();

const taskController = require("./routes/userTask");

require("./config/dbConn");

app.use(express.json());

app
  .route("/task")
  .get(taskController.listAllTask)
  .post(taskController.createNewTask);

app
  .route("/task/:taskid")
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

//create & get env port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Listen at ${port}...`);
});
