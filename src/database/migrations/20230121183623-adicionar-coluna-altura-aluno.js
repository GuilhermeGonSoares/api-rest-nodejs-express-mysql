/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('alunos', 'altura', {
      type: Sequelize.FLOAT,
      allowNull: false,
    });
  },

  async down() {},
};
