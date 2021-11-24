"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Moves", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      row: {
        type: Sequelize.INTEGER,
      },
      column: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.CHAR(255),
      },
      order: {
        type: Sequelize.INTEGER,
      },
      matchId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Moves");
  },
};
