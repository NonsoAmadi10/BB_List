import { Model, Optional } from 'sequelize';

interface ListAttributes {
  id: string;
  listName: string;
 
};

/*
  We have to declare the AuthorCreationAttributes to
  tell Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/
interface ListCreationAttributes
  extends Optional<ListAttributes, 'id'> {}

interface ListInstance
  extends Model<ListAttributes, ListCreationAttributes>,
    ListAttributes {
      createdAt?: Date;
      updatedAt?: Date;
}
export default ListInstance;