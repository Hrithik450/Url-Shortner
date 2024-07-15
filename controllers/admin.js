const url = require("../models/user");

async function AdminPage(req, res) {
  // if (!req.user) return res.redirect("/login");
  const AllUrls = await url.find({});
  return res.render("home", {
    urls: AllUrls,
  });
}

module.exports = {
  AdminPage,
};
