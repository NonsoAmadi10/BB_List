import { Model, Optional } from 'sequelize';

interface ListAttributes {
  id: string;
  listName: string;
 
};

interface DataValues {
  dataValues?: any;
}

interface ListCreationAttributes
  extends Optional<ListAttributes, 'id'> {}

interface ListInstance
  extends Model<ListAttributes, ListCreationAttributes>, DataValues,
    ListAttributes {
      createdAt?: Date;
      updatedAt?: Date;
}
export default ListInstance;