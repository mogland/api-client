export class PagerDto {
  size: number = 10;
  page: number = 1;
  select?: string;
  sortBy?: string;
  sortOrder?: 1 | -1;
  year?: number;
  status?: number;
}
