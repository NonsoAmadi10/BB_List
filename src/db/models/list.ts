import { DataTypes } from 'sequelize/types';
import { sequelize} from '.'
import ListInstance from '../../interfaces/list';
import Task from './task';

const List = sequelize.define<ListInstance>(
  'List',
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
      listName: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
    
  }
);

List.hasMany(Task, {
  /*
    You can omit the sourceKey property
    since by default sequelize will use the primary key defined
    in the model - But I like to be explicit 
  */
  sourceKey: 'id',
  foreignKey: 'listId',
  as: 'tasks'
});


Task.belongsTo(List, {
  foreignKey: 'taskId',
  as: 'list'
})