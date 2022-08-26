/* eslint-disable prefer-const */
import { reqUserRegister, reqUserLogin, reqRegCode } from '@/api/index.js'
import { setToken, getToken } from '@/utils/token.js'
const state = {
  token: getToken(),
  imgsrc: ''
}
const mutations = {
  USERLOGIN(state, token) {
    state.token = token
  },
  GETCODE(state, res) {
    state.imgsrc = window.URL.createObjectURL(res)
    console.log(state.imgsrc)
  }
}
const actions = {
  // 用户注册
  async userRegister({ commit }, user) {
    let res = await reqUserRegister(user)
    console.log(res)
    if (res.code === '200') {
      alert('注册成功')
      return 'ok'
    } else {
      console.log(res)
      return Promise.reject(new Error(res.message))
    }
  },
  // 登入
  async userLogin({ commit }, data) {
    let res = await reqUserLogin(data)
    console.log(res)
    if (res.code === '200') {
      alert('登录成功')
      commit('USERLOGIN', res.message)
      setToken(res.message)
      return 'ok'
    } else {
      return Promise.reject(new Error(res.message))
    }
  },
  async userCode({ commit }, phone) {
    let res = await reqRegCode(phone)
    commit('GETCODE', res)
    console.log(res)
  }
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}
