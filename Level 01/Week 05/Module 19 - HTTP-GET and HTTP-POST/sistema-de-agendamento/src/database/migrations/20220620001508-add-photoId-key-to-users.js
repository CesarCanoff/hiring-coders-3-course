"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.addColumn("users", "photo_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "files",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.removeColumn("users", "photo_id");
  },
};
