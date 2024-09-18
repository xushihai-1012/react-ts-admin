import { StorageEnum } from "@/types/enum";

export const getItem = <T>(key: StorageEnum): T | null => {
  let value = null
  try {
    const res = window.localStorage.getItem(key)
    if (res) {
      value = JSON.parse(res)
    }
  } catch (error) {
    console.log(error);
  }
  return value
}

export const getStringItem = (key: StorageEnum): string | null => {
  return localStorage.getItem(key)
}

export const setItem = <T>(key: StorageEnum, val: T) => {
  localStorage.setItem(key, JSON.stringify(val))
}

export const removeItem = (key: string) => {
  localStorage.removeItem(key)
}

export const clearItems = () => {
  localStorage.clear()
}
