'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_techs');
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.dropTable('user_techs');
    
  }
};
