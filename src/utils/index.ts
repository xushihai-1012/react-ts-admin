import { chain } from 'ramda'

/**
 * 使用chain将传入的arr数组扁平化
 * 传入一个泛型的T数组 这个泛型T可能还有children属性
 * @param arr 包含树结构的数组 类型为T[] 默认值是[]
 * @returns {T[]} 扁平化后的数组
 */
export function flattenTrees<T extends { children?: T[] }>(arr: T[] = []): T[] {
  return chain((item) => {
    //  其中一种逻辑写法
    // if (item.children && Array.isArray(item.children)) {
    //   return [item, ...flattenTrees(item.children)]
    // } else {
    //   return [item]
    // }
    const children = item.children
    return [item, ...flattenTrees(children)]
  }, arr)
}
