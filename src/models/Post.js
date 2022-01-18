const { Model, DataTypes, UUIDV4, UUID, ENUM } = require("sequelize");

const connection = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  uuid: {
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    // primaryKey: true,
  },
  food_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  food_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  },
  location: {
    type: DataTypes.STRING,
    defaultValue: "298 Brookvale Rd, Birmingham B23 7RT",
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
    onDelete: "cascade",
  },
  food_type: {
    type: ENUM,
    defaultValue: "Meal",
    values: ["Grocery", "Meal", "Dessert", "Drink"],
  },
  status: {
    type: ENUM,
    defaultValue: "Available",
    values: ["Available", "Unavailable"],
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  freezeTableName: true,
  underScored: true,
  moduleName: "post",
};

class Post extends Model {}

Post.init(schema, options);

module.exports = Post;
