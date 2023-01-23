/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('alunos', 'peso', {
      type: Sequelize.FLOAT,
      allowNull: false,
    });
  },

  async down() {},
};
