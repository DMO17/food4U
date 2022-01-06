const login = (req, res) => {
  res.json({ message: "login" });
};
const signUp = (req, res) => {
  res.json({ message: "signUp" });
};
const logOut = (req, res) => {
  res.json({ message: "logOut" });
};

module.exports = { login, signUp, logOut };
