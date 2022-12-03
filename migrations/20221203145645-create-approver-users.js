'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('approver_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      approver_id: {
        type: Sequelize.STRING(36),
        references: {
          model: 'user_entity',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      users: {
        type: Sequelize.TEXT('medium'),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('approver_users');
  }
};
