const express = require("express");
const app = express();
require("dotenv").config();
const Carrouter = require("./router/Babyrouter");
const mongoose = require("mongoose");
const car = require("./model/babySchema");
const cors = require("cors");
const Babyrouter = require("./router/Babyrouter");
const LoginRouter = require("./router/loginRouter");
const RegisterRouter = require("./router/registerRouter");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"))
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/baby", Babyrouter);
app.use("/api/baby/login", LoginRouter);
app.use("/api/baby/register", RegisterRouter);

app.listen(process.env.PORT, function () {
  console.log(`server is connected on ${process.env.PORT}`);
});
