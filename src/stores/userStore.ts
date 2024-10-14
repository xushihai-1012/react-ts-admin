import { create } from 'zustand'
import { getItem, setItem, removeItem } from '@/utils/storage'
import { StorageEnum } from '@/types/enum'
import { UserInfo, UserToken } from '@/types/user'
import { useNavigate } from 'react-router-dom'
import { App } from 'antd'
import { useMutation } from '@tanstack/react-query'
import { singin, SignInReqParamType } from '@/api/userService'

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env

type UserStore = {
    userInfo: Partial<UserInfo>
    userToken: UserToken
    action: {
        setUserInfo: (userInfo: UserInfo) => void
        setUserToken: (userToken: UserToken) => void
        clearUserInfoAndToken: () => void
    }
}

const useUserStore = create<UserStore>((set) => ({
    userInfo: getItem(StorageEnum.User) || {},
    userToken: getItem(StorageEnum.Token) || {},
    action: {
        setUserInfo: (userInfo) => {
            set({ userInfo: userInfo })
            setItem(StorageEnum.User, userInfo)
        },
        setUserToken: (userToken) => {
            set({ userToken })
            setItem(StorageEnum.Token, userToken)
        },
        clearUserInfoAndToken() {
            set({ userInfo: {}, userToken: {} })
            removeItem(StorageEnum.User)
            removeItem(StorageEnum.Token)
        },
    },
}))

// 直接导出方便使用
export const useUserInfo = () => useUserStore((state) => state.userInfo)
export const useUserToken = () => useUserStore((state) => state.userToken)
export const useUserPermisson = () => useUserStore((state) => state.userInfo.permissions)
export const useUserAction = () => useUserStore((state) => state.action)
export const useSignIn = () => () => {
    const navigate = useNavigate()
    const { message } = App.useApp()
    const { setUserInfo, setUserToken } = useUserAction()

    const signInMutation = useMutation({
        mutationFn: singin,
    })

    const signIn = async (data: SignInReqParamType) => {
        try {
            const res = await signInMutation.mutateAsync(data)
            const { user, accessToken, refreshToken } = res
            setUserToken({ accessToken, refreshToken })
            setUserInfo(user)
            navigate(HOMEPAGE)
        } catch (error: any) {
            message.warning({
                content: error.message,
                duration: 3,
            })
        }
    }

    return signIn
}

export default useUserStore
