import { Model, DataTypes } from "../debs.ts";

class Category extends Model {
  static table = "categories";
  
  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING
  }

  name!: string;
}

export default Category;