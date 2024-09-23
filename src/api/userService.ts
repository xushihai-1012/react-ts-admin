import { UserToken, UserInfo } from '@/types/user';
import request from './request'

export enum UserPath {
    SignIn = '/auth/signin',
    SignUp = '/auth/signup',
    Logout = '/auth/logout',
    Refresh = '/auth/refresh',
    User = '/user',
}

export interface SignInReqParamType {
    username: string;
    password: string;
}

export type SignInResponse = UserToken & { user: UserInfo }


export function singin(data: SignInReqParamType) {
    return request<SignInResponse>({
        url: UserPath.SignIn,
        method: 'post',
        data
    })
}


export function signup(data: SignInReqParamType) {
    return request({
        url: UserPath.SignUp,
        method: 'post',
        data
    })
}

export function logout() {
    return request({
        url: UserPath.Logout,
        method: 'get',
    })
}

export function findById(id: string) {
    return request({
        url: `${UserPath.Logout}/${id}`,
        method: 'get',
    })
}