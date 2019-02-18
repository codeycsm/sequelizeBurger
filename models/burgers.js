module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define(`Burger`, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defautValue: false
    },
    name: DataTypes.STRING
  });
  return Burger;
};
