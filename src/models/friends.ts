import { BaseModel } from "./base";

export enum RssParserType {
  RSS = 'rss',
  ATOM = 'atom',
}
export enum FriendStatus {
  Approved = 0, 
  Pending = 1,
  Spam = 2,
  Trash = 3,
}

export class FriendsModel extends BaseModel {
  token?: string;
  name!: string;
  link!: string;
  desc?: string;
  logo?: string;
  nickname?: string;
  avatar?: string;
  email?: string;
  status?: FriendStatus;
  group?: string;
  autoCheck?: boolean;
  verifyLink!: string;
  feed?: string;
  feedType?: RssParserType;
  feedContents?: string;
}
