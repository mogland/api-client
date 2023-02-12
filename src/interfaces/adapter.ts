import { BeAnObject } from "../types/typegoose";

export interface IAdapterOptions {
  method: string;
  body?: BeAnObject;
  headers?: BeAnObject;
  params?: BeAnObject;
  [key: string]: any;
}

export type IAdapterResponse<T> = Promise<BeAnObject & { data: T }>;

export type IAdapter<P> = Readonly<{
  default: P;

  get: <T = unknown>(
    url: string,
    options?: Omit<IAdapterOptions, "body">
  ) => IAdapterResponse<T>;

  post: <T = unknown>(
    url: string,
    options?: IAdapterOptions
  ) => IAdapterResponse<T>;

  put: <T = unknown>(
    url: string,
    options?: IAdapterOptions
  ) => IAdapterResponse<T>;

  patch: <T = unknown>(
    url: string,
    options?: IAdapterOptions
  ) => IAdapterResponse<T>;

  delete: <T = unknown>(
    url: string,
    options?: Omit<IAdapterOptions, "body">
  ) => IAdapterResponse<T>;
}>;
