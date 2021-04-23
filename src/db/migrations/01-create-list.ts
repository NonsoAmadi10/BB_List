module.exports = {
  up: async (queryInterface: { createTable: (arg0: string, arg1: { id: { allowNull: boolean; primaryKey: boolean; type: any; defaultValue: any; }; listName: { allowNull: boolean; type: any; }; createdAt: { allowNull: boolean; type: any; }; updatedAt: { allowNull: boolean; type: any; }; }) => any; }, Sequelize: { UUID: any; UUIDV4: any; STRING: any; DATE: any; }) => queryInterface.createTable('Lists', {
   id: {
     allowNull :false,
     primaryKey: true,
     type: Sequelize.UUID,
     defaultValue: Sequelize.UUIDV4
   },
   listName: {
     allowNull: false,
     type: Sequelize.STRING
   },
   createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
  }),

  down: async (queryInterface: { dropTable: (arg0: string) => any; }) => queryInterface.dropTable('Lists')
};
