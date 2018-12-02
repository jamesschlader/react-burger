module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      isAlphanumeric: true,
      allowNull: false,
      notEmpty: true,
      validate: {
        len: [1, 60]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Burger;
};
