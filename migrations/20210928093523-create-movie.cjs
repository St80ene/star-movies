'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      episode: {
        type: Sequelize.INTEGER,
      },
      opening_crawl: {
        type: Sequelize.STRING,
      },
      director: {
        type: Sequelize.STRING,
      },
      producer: {
        type: Sequelize.STRING,
      },
      characters: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
      },
      comments: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
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
    await queryInterface.dropTable('Movies');
  }
};