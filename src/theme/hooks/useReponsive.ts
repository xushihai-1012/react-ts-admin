//使用useBreakpoint导出计算当前屏幕大小

import { Grid, theme } from "antd";
import { Breakpoint, ScreenMap, ScreenSizeMap } from "antd/es/_util/responsiveObserver";

const { useBreakpoint } = Grid

// const screens = useBreakpoint()
// {
//     "xs": false,
//     "sm": true,
//     "md": true,
//     "lg": true,
//     "xl": true,
//     "xxl": false
// }
// [
//     [
//         "xs",
//         false
//     ],
//     [
//         "sm",
//         true
//     ],
//     [
//         "md",
//         true
//     ],
//     [
//         "lg",
//         true
//     ],
//     [
//         "xl",
//         true
//     ],
//     [
//         "xxl",
//         false
//     ]
// ]
// Object.entries(screens)
//     .filter((screen) => !!screen[1])

export const useResponsive = () => {
    const { token: {
        screenXS, screenSM, screenMD, screenLG, screenXL, screenXXL
    } } = theme.useToken()
    const screenArr: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']

    const screenEnum: ScreenSizeMap = {
        xs: screenXS,
        sm: screenSM,
        md: screenMD,
        lg: screenLG,
        xl: screenXL,
        xxl: screenXXL,
    }

    const screenMap: ScreenMap = useBreakpoint()
    // 使用 [...screenArray].reverse().find() 来代替 findLast 方法，避免兼容性问题
    // [...screenArray] 创建了一个 screenArray 的副本，这样 reverse 方法不会改变原数组的顺序
    // 获取当前屏幕大小
    const cureenScreen = [...screenArr].reverse().find(item => {
        const result = screenMap[item]
        return result === true
    })

    return {
        screenEnum,
        screenMap,
        cureenScreen
    }

}