
import { BeAnObject } from "src/types/typegoose";
import { ImageModel } from "./image";

/**
 * 基础模型
 * 
 * created 创建时间
 * id 文章id
 * protectedKeys 需要保护的字段
 */
export class BaseModel {
  created?: Date;
  id?: string;
  static get protectedKeys() {
    return ['created', 'id', '_id'];
  }
}

/**
 * 评论索引模型
 * 
 * commentsIndex 评论索引
 * allowComment 是否允许评论
 * protectedKeys 需要保护的字段
 */
export abstract class BaseCommentIndexModel extends BaseModel {
  commentsIndex?: number;
  allowComment?: boolean;
  static get protectedKeys() {
    return ['commentsIndex'].concat(super.protectedKeys);
  }
}

/**
 * 写作基础模型
 * 
 * title 标题
 * text 内容
 * images 图片
 * modified 修改时间
 * fields 自定义字段
 * password 密码
 * hide 是否隐藏
 * rss 是否推送到rss
 * protectedKeys 需要保护的字段
 */
export class WriteBaseModel extends BaseCommentIndexModel {
  title!: string;
  text!: string;
  images?: ImageModel[];
  modified?: Date | null;
  fields?: BeAnObject;
  password?: string | null;
  hide?: boolean;
  rss?: boolean;
  static get protectedKeys() {
    return super.protectedKeys;
  }
}

/**
 * 文章x量基础模型
 * 
 * read 阅读量
 * like 点赞量
 */
export class CountMixed {
  read?: number;
  like?: number;
}
