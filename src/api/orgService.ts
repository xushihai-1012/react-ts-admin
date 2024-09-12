import request from './request'

export enum OrgApiPath {
  path = '/org',
}

export function getOrgList() {
  return request({
    url: OrgApiPath.path,
    method: 'get',
  })
}
