import { Model, Optional } from 'sequelize';


interface TaskAttributes {
  id: string;
  task: string;
  completed: boolean;
  taskId: string;
}

interface TaskCreationAttributes
  extends Optional<TaskAttributes, 'id'> {}

interface TaskInstance
  extends Model<TaskAttributes, TaskCreationAttributes>,
    TaskAttributes {
      createdAt?: Date;
      updatedAt?: Date;
}
    
export default TaskInstance;