'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class approver_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  approver_users.init({
    approver_id: DataTypes.STRING,
    users: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'approver_users',
  });
  return approver_users;
};