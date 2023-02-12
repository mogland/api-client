import { WriteBaseModel, CountMixed } from "./base";
import { CategoryModel } from "./category";

export class PostModel extends WriteBaseModel {
  slug?: string;
  summary?: string;
  categoryId!: CategoryModel;
  public category?: CategoryModel;
  copyright?: boolean;
  count?: CountMixed;
  tags?: string[];
}
