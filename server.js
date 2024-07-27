const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/tasks");

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/taskmanager", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use("/api", taskRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
