const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

User.associate = (models) => {
  User.belongsTo(models.User, {
    foreignKey: {
      allowNull: false,
    },
  });
};

return User;
};