
export function env(key: string, defaultValue?: string): any {
  if (import.meta.env[key]) {
    return import.meta.env[key]
  }

  return defaultValue
}