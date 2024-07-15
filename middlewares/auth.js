const { getUser } = require("../services/auth");

async function CheckAuthentication(req, res, next) {
  const token = req.cookies?.uid;
  if (!token) return res.redirect("/login");

  const user = getUser(token);
  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}

function restrictTo(roles = []) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("./login");

    if (!roles.includes(req.user.role))
      return res.end("You are not Authorized to access this");

    next();
  };
}

// async function checkAuth(req, res, next) {
//   const token = await req.cookies?.uid;
//   if (!token) return res.redirect("./login");

//   const user = getUser(token);
//   req.user = user;
//   next();
// }

module.exports = {
  CheckAuthentication,
  restrictTo,
  // checkAuth,
};
