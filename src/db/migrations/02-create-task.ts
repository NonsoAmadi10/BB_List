module.exports = {
  up: async (queryInterface: { createTable: (arg0: string, arg1: { id: { allowNull: boolean; primaryKey: boolean; type: any; defaultValue: any; }; task: { allowNull: boolean; type: any; }; completed: { type: any; defaultValue: boolean; }; listId: { type: any; references: { model: string; key: string; }; }; createdAt: { allowNull: boolean; type: any; }; updatedAt: { allowNull: boolean; type: any; }; }) => any; }, Sequelize: { UUID: any; UUIDV4: any; STRING: any; BOOLEAN: any; DATE: any; }) => queryInterface.createTable('Tasks', {
    id: {
      allowNull :false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    task: {
      allowNull:false,
      type: Sequelize.STRING
    },

    completed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },

    listId: {
      type: Sequelize.UUID,
      references: {
        model: 'Lists',
        key: 'id'
      }
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

  down: async (queryInterface: { dropTable: (arg0: string) => any; }) => queryInterface.dropTable('Tasks')
};
