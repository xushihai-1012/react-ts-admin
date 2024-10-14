import { UserToken, UserInfo } from '@/types/user'
import request from './request'
import { AxiosResponse } from 'axios'

export enum UserPath {
  SignIn = '/auth/signin',
  SignUp = '/auth/signup',
  Logout = '/auth/logout',
  Refresh = '/auth/refresh',
  User = '/user',
}

export interface SignInReqParamType {
  username: string
  password: string
}

export type SignInResponse = UserToken & { user: UserInfo }

export async function singin(
  data: SignInReqParamType,
): Promise<SignInResponse> {
  const res = await request({
    url: UserPath.SignIn,
    method: 'post',
    data,
  })
  return res.data
}

// export async function signin(
//   url: string,
//   data: SignInReqParamType,
// ): Promise<SignInResponse> {
//   const res = await request.post<Promise<SignInResponse>>(url, data)
//     return await res.data
// }

export async function signup(
  data: SignInReqParamType,
): Promise<SignInResponse> {
  const res = await request({
    url: UserPath.SignUp,
    method: 'post',
    data,
  })
  return res.data
}

export function logout() {
  return request({
    url: UserPath.Logout,
    method: 'get',
  })
}

export async function findById(id: string): Promise<UserInfo[]> {
  const res = await request<any, AxiosResponse<UserInfo[]>>({
    url: `${UserPath.Logout}/${id}`,
    method: 'get',
  })
  return res.data
}
