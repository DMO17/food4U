const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const connection = require("../config/connection");
const hashPassword = require("../hooks/hashpassword");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 35],
    },
  },

  phone_num: {
    type: DataTypes.STRING,
    allowNull: true,
    // validate: {
    //   isNumeric: true,
    // },
  },

  location: {
    type: DataTypes.STRING,
    defaultValue: "Birmingham Airport, Airport Way, Birmingham B26 3QJ",
    allowNull: true,
  },

  profile_url: {
    type: DataTypes.STRING,
    defaultValue:
      "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png",
    allowNull: true,
  },

  description: {
    type: DataTypes.STRING,
    defaultValue:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    allowNull: true,
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  freezeTableName: true,
  underScored: true,
  moduleName: "user",
  hooks: {
    beforeCreate: hashPassword,
  },
};

class User extends Model {
  async validateUsersPassword(inputPassword) {
    const isPasswordValid = await bcrypt.compare(inputPassword, this.password);
    return isPasswordValid;
  }
}

User.init(schema, options);

module.exports = User;
