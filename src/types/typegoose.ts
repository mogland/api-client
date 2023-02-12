export type BeAnObject = Record<string, any>;
export type Class<T> = new (...args: any[]) => T;