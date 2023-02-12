import { PartialType } from "../types/partial-type";
import { WriteBaseModel } from "./base";

export class PageModel extends WriteBaseModel {
  slug?: string;
  subtitle?: string | null;
  order?: number;
}

export class PartialPageModel extends PartialType(PageModel) {}
