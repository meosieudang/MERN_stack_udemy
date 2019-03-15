const express = require("express");
const mongoose = require("mongoose");
const app = express();

const users = require("./routes/api/users");

// MongoDB connect
const db = require("./config/key").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch();

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server start with port ${port}`));
