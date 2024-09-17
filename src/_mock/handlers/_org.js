import { http, HttpResponse } from 'msw'
import { ORG_LIST } from '@/_mock/assets'

import { OrgApiPath } from '@/api/orgService'

const orgList = http.get(`/api${OrgApiPath.path}`, () => {
  console.log(11111111111);
  return HttpResponse.json({
    status: 0,
    message: '',
    data: ORG_LIST,
  })
})

export default [orgList]
