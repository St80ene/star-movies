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
        type: Sequelize.STRING(2048),
      },
      director: {
        type: Sequelize.STRING,
      },
      producer: {
        type: Sequelize.STRING,
      },
      release_date: {
        type: Sequelize.STRING,
      },
      characters: {
        type: Sequelize.ARRAY(Sequelize.STRING(2048)),
      },
      comments: {
        type: Sequelize.ARRAY(Sequelize.STRING(2048)),
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