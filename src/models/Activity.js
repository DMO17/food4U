const { Model, DataTypes } = require("sequelize");
const connection = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
    onDelete: "cascade",
  },
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "post",
      key: "id",
    },
    onDelete: "cascade",
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  freezeTableName: true,
  underScored: true,
  moduleName: "activity",
};

class Activity extends Model {}

Activity.init(schema, options);

module.exports = Activity;
