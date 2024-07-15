const jwt = require("jsonwebtoken");
const secret = "Hruthik_loves_Pallavi";

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      password: user.password,
    },
    secret
  );
}

function getUser(token) {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
