import { DataTypes } from 'sequelize/types';
import { sequelize} from '.'
import TaskInstance from '../../interfaces/task';

const Task = sequelize.define<TaskInstance>(
  'Task', {

    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
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