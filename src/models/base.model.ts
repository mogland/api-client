import { BeAnObject } from "@type/typegoose";
import { ImageModel } from "./image.model";

/**
 * 基础模型
 * 
 * @property created 创建时间
 * @property id 文章id
 * @property protectedKeys 需要保护的字段
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
 * @property commentsIndex 评论索引
 * @property allowComment 是否允许评论
 * @property protectedKeys 需要保护的字段
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
 * @property title 标题
 * @property text 内容
 * @property images 图片
 * @property modified 修改时间
 * @property fields 自定义字段
 * @property password 密码
 * @property hide 是否隐藏
 * @property rss 是否推送到rss
 * @property protectedKeys 需要保护的字段
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
 * @property read 阅读量
 * @property like 点赞量
 */
export class CountMixed {
  read?: number;
  like?: number;
}
