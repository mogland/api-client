import { Class } from "../types/typegoose";
import { IController } from "./controller";

export type ClientOptions = Partial<{
  controllers: Class<IController>[]
}>