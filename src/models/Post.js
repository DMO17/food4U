const { Model, DataTypes, UUIDV4, UUID, ENUM } = require("sequelize");

const connection = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
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
  food_type_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "foodType",
      key: "id",
    },
    onDelete: "cascade",
  },
  item: {
    type: ENUM,
    values: ["Single", "Bundle"],
  },
  status: {
    type: ENUM,
    values: ["Available", "Closed", "Reserved"],
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
