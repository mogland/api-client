export interface Type<T = any> extends Function {
  new (...args: any[]): T;
}

export function PartialType<T>(classRef: Type<T>): Type<Partial<T>> {
  return classRef;
}