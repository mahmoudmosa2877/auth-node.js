const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const express = require("express");
const app = express();
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DATABASE, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log("connection success");
  });
const port = process.env.PORT || 3000;

app.use("/", (req, res) => {
  console.log("request");
  res.send("send");
});
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
