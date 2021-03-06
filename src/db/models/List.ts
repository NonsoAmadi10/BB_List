import { DataTypes } from 'sequelize';
import { sequelize} from '.'
import ListInstance from '../../interfaces/list';
import Task from './Task';

const List = sequelize.define<ListInstance>(
  'List',
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
      defaultValue: DataTypes.UUIDV4
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
  foreignKey: 'listId',
  as: 'list'
})

export default List;