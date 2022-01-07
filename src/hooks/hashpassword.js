const bcrypt = require("bcrypt");

const hashPassword = (data) => {
  const hashedPassword = bcrypt.hash(data.password, 10);
  data.password = hashedPassword;

  return data;
};
