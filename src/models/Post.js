const { Model, DataTypes, UUIDV4 } = require("sequelize");

const connection = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // primaryKey: true,
    autoIncrement: true,
  },
  uuid: {
    type: Sequelize.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  food_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  food_url: {
    type: DataTypes.STRING,
    defaultValue:
      "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png",
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
    onDelete: "cascade",
  },
  food_type_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "food_type",
      key: "id",
    },
    onDelete: "cascade",
  },
  //status enum
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
