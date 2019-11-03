"use strict"

module.exports = (sequelize, DataTypes) => {
  var UserSale = sequelize.define(
    "UserSale",
    {
      postId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    { timestamps: false }
  )
  UserSale.associate = function(models) {}
  return UserSale
}
