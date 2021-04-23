import { Model, Optional } from 'sequelize';


interface TaskAttributes {
  id: string;
  task: string;
  completed?: boolean;
  listId: string;
}

interface DataValues {
  dataValues?: any;
}

interface TaskCreationAttributes
  extends Optional<TaskAttributes, 'id'> {}

interface TaskInstance
  extends Model<TaskAttributes, TaskCreationAttributes>, DataValues,
    TaskAttributes {
      createdAt?: Date;
      updatedAt?: Date;
}
    
export default TaskInstance;