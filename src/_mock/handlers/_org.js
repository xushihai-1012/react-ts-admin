import { http, HttpResponse } from 'msw'
import { ORG_LIST } from '@/'

const orgList = http.get('', () => {
  return HttpResponse.json({
    status: 0,
    message: '',
    data: ORG_LIST,
  })
})

export default [orgList]
