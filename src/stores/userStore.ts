import { createStore } from 'zustand'
import { getItem } from '@/utils/storage'
import { StorageEnum } from '@/types/enum'
import { UserInfo, UserToken } from '@/types/user'
import { useMutation } from '@tanstack/react-query'

type UserStore = {
  userInfo: Partial<UserInfo>
  userToken: UserToken
  action: {
    setUserInfo: (userInfo: UserInfo) => void
  }
}

const useUserStore = createStore<UserStore>((set) => ({
  userInfo: getItem(StorageEnum.User) || {},
  userToken: getItem(StorageEnum.Token) || {},
  action: {
    setUserInfo: (userInfo) => {
      set({ userInfo: userInfo })
    },
  },
}))
