import { PartialType } from "../types/partial-type";
import { BaseModel } from "./base";

export enum CategoryType {
  Category,
  Tag,
}

export class CategoryModel extends BaseModel {
  name!: string;
  type?: CategoryType = CategoryType.Category;
  slug!: string;
  icon?: string;
  description?: string;
}

export class PartialPageModel extends PartialType(CategoryModel) {}
