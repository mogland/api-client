import { CategoryType } from "../models";

export class SlugorIdDto {
  query?: string;
}

export class MultiQueryTagAndCategoryDto {
  tag?: boolean | string;
}

export class MultiCategoriesQueryDto {
  ids?: Array<string>;
  joint?: boolean;
  type: CategoryType = CategoryType.Category;
}
