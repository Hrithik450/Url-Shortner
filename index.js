const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { connectMongoDB } = require("./connection");
const { CheckAuthentication } = require("./middlewares/auth");
const cookieParser = require("cookie-parser");

const ActionRouter = require("./routes/user");
const urlStaticRouter = require("./routes/static");
const urlRouter = require("./routes/url");

const app = express();

connectMongoDB("mongodb://127.0.0.1:27017/url-shortner").then(() =>
  console.log("mongoose connected")
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/", urlStaticRouter);
app.use("/url", CheckAuthentication, urlRouter);
app.use("/user", ActionRouter);

app.listen(4000, () => console.log("Server started!"));
