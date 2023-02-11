const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Router = require("./routes");
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.get("/",(req,res) => res.status(200).send("TikTok mern clone"))

mongoose.connect(
  "mongodb+srv://saina:saina@cluster0.ltx4k1i.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use(Router);
app.listen(3002, () => {
  console.log("Server is running at port 3002");
});
