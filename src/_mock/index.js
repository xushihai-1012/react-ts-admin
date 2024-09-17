import { setupWorker } from 'msw/browser'

import orgMockApi from './handlers/_org'
// import userMockApi from './handlers/_user';

const handlers = [...orgMockApi]

// 注册 Request Handlers, 生成Worker
const worker = setupWorker(...handlers)
export default worker