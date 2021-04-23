import { DataTypes } from 'sequelize';
import { sequelize } from '.'
import TaskInstance from '../../interfaces/task';
import { v4 } from 'uuid';

const Task = sequelize.define<TaskInstance>(
  'Task', {

    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
      defaultValue: v4()
    },
    task: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },

    taskId: {
      allowNull: true,
      type: DataTypes.UUID,
    },
  }
)

export default Task;