import { BaseModel } from "./base";

export enum CommentStatus {
  Pending = 0, // 待审核
  Approved = 1, // 已通过
  Spam = 2, // 垃圾评论
  Trash = 3, // 回收站
  Private = 4, // 私密评论
}

export enum CommentReactions {
  Like = "like",
  Dislike = "dislike",
  Smile = "smile",
  Angry = "angry",
  Laugh = "laugh",
  Confused = "confused",
  Heart = "heart",
  Haha = "haha",
  Cry = "cry",
  Wow = "wow",
}

export interface CommentReaction {
  [key: string]: number;
}

export class CommentsModel extends BaseModel {
  pid!: string; // 关联的 pid
  parent?: CommentsModel; // 父评论
  children?: CommentsModel[]; // 子评论
  text!: string;
  author!: string;
  email!: string;
  url?: string;
  status?: CommentStatus;
  commentsIndex?: number; // 评论数量
  key?: string; // 评论key
  reaction?: CommentReaction;
}
