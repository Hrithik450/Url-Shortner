const url = require("../models/user");

async function HomePage(req, res) {
  // if (!req.user) return res.redirect("/login");
  const AllUrls = await url.find({ createdBy: req.user._id });
  return res.render("home", {
    urls: AllUrls,
  });
}

async function SignUpPage(req, res) {
  return res.render("signup");
}

async function LoginPage(req, res) {
  return res.render("login");
}

module.exports = {
  HomePage,
  SignUpPage,
  LoginPage,
};
