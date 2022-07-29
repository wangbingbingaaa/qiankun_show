import { initGlobalState } from 'qiankun'
// 初始化 state
const initState = {
  name: 'qiankun-base',
  msg: '主应用消息'
}
const actions = initGlobalState(initState)

export default actions