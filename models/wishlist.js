const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define('Wishlist', {
    wishlistID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

Wishlist.associate = (models) => {
  Wishlist.belongsTo(models.User, {
    foreignKey: {
      allowNull: false,
    },
  });
};

return Wishlist;
};