import { chain } from "ramda";


/**
 * 展平包含树结构的数组
 * @param trees 
 * @returns 
 */
export const flattenTrees = <T extends { children?: T[] }>(trees: T[] = []): T[] => {
    return chain(node => {
        const children = node.children || []
        return [node, ...flattenTrees(children)]
    }, trees)
}