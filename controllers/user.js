const user = require("../models/url");

const { setUser } = require("../services/auth");

async function handleCreateNewUsers(req, res) {
  const { Full_Name, email, password } = req.body;

  await user.create({
    Full_Name,
    email,
    password,
  });

  return res.status(200).redirect("/");
}

async function handleLoginUsers(req, res) {
  const { email, password } = req.body;

  const users = await user.findOne({ email, password });
  if (!users) return res.status(400).render("login");

  const token = setUser(users);
  res.cookie("uid", token);

  return res.status(200).redirect("/");
}

module.exports = {
  handleCreateNewUsers,
  handleLoginUsers,
};
