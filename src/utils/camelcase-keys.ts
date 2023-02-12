import { isPlainObject } from "./is-plain-object"

export function camelcaseKeys<T extends Record<string, any>>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map((x) => camelcaseKeys(x)) as any
  }

  if (isPlainObject(obj)) {
    return Object.keys(obj).reduce((result: any, key) => {
      result[camelcase(key)] = camelcaseKeys(obj[key])
      return result
    }, {}) as any
  }

  return obj
}

export function camelcase(str: string): string {
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
}
