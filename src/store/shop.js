/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import { reqAddShop, reqAddUser, reqEditUser, reqGetAllShop, reqGetCurrent } from '@/api/index.js'
const state = {
  shopForm: {},
  userForm1: {},
  allShopForm: [],
  currentShopForm: [],
  shopId: '',
  userId: '',
  shopTime: '',
  btnChangeEnable: ''
}
const mutations = {
  ADDSHOP(state, res) {
    state.shopId = res.result
    state.shopTime = res.timestamp
    state.btnChangeEnable = true
  },
  SAVESHOP(state, shopForm) {
    state.shopForm = shopForm
  },
  ADDUSER(state, userForm) {
    state.userForm1 = userForm.result
    state.userId = userForm.result.phone
    setTimeout(() => {
      location.reload()
    }, 2000)
  },
  EDITUSER(state, temuserForm) {
    state.userForm1 = temuserForm.result
    state.userId = temuserForm.result.phone
    setTimeout(() => {
      location.reload()
    }, 2000)
  },
  GETALLSHOP(state, form) {
    state.allShopForm = form.records
  },
  GETCURRENT(state, form) {
    state.currentShopForm = form.result
  }
}
const actions = {
  // 新增商店
  async addShop({ commit }, shopForm) {
    let res = await reqAddShop(shopForm)
    if (res.code === 200) {
      console.log(res)
      commit('ADDSHOP', res)
    }
  },
  // 保存商店
  saveshop({ commit }, shopForm) {
    commit('SAVESHOP', shopForm)
  },
  async addUser({ commit }, userForm) {
    let res = await reqAddUser(userForm)
    if (res.code === 200) {
      console.log(res)
      commit('ADDUSER', res)
    }
  },
  async editUser({ commit }, temuserForm) {
    let res = await reqEditUser(temuserForm)
    if (res.code === 200) {
      console.log(res)
      commit('EDITUSER', res)
    }
  },
  // 获取全部商店
  async getAllShop({ commit }, userid) {
    let res = await reqGetAllShop(userid)
    if (res.code === 200) {
      console.log(res.result)
      commit('GETALLSHOP', res.result)
    }
  },
  // 获取当前商店库存
  async getCurrentShop({ commit }, shopid) {
    let res = await reqGetCurrent(shopid)
    if (res.code === 200) {
      console.log(res)
      commit('GETCURRENT', res)
    }
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
