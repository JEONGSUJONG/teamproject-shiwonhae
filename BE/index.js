const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ROUTER
const PingRouter = require("./Routes/ping-router");

app.use("/api/v1", PingRouter);

// PORT
const PORT = process.env.PORT;

// MONGOOSE
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: process.env.MONGO_DB_NAME,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
