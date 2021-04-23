import { DataTypes } from 'sequelize';
import { sequelize } from '.'
import TaskInstance from '../../interfaces/task';


const Task = sequelize.define<TaskInstance>(
  'Task', {

    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
      defaultValue: DataTypes.UUIDV4
    },
    task: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },

    listId: {
      allowNull: true,
      type: DataTypes.UUID,
    },
  }
)

export default Task;