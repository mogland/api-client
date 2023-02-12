export function isPlainObject<T extends Record<string, any>>(obj: T) {
  return obj !== null && typeof obj === 'object' && obj.constructor === Object;
}