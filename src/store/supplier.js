/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import { reqGetSupplier, reqGetSupplierGoods } from '@/api/index.js'
const state = {
  supplierList: [],
  supplierGoodsList: []
}
const mutations = {
  GETSUPPLIER(state, form) {
    state.supplierList = form.records
  },
  SUPPLIERGOODS(state, form) {
    state.supplierGoodsList = form.result
  }
}
const actions = {
  async getSupplier({ commit }) {
    let res = await reqGetSupplier()
    console.log(res)
    if (res.code === 200) {
      commit('GETSUPPLIER', res.result)
    }
  },
  async getSupplierGoodsList({ commit }, supplierid) {
    let res = await reqGetSupplierGoods(supplierid)
    console.log(res)
    if (res.code === 200) {
      commit('SUPPLIERGOODS', res)
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
