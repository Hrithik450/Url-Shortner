const express = require("express");
const { HomePage, SignUpPage, LoginPage } = require("../controllers/static");
const { AdminPage } = require("../controllers/admin");
const { CheckAuthentication, restrictTo } = require("../middlewares/auth");

const Router = express.Router();

Router.get("/", CheckAuthentication, HomePage);
Router.get("/Admin", CheckAuthentication, restrictTo(["ADMIN"]), AdminPage);
Router.get("/signup", SignUpPage);
Router.get("/login", LoginPage);

module.exports = Router;
