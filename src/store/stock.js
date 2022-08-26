/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import { reqGetAllGoods, reqEditGoods, reqAddGoods, reqDelGoods, reqInStock, reqGetInStock, reqOutStock, reqGetOutStock } from '@/api/index.js'
const state = {
  allList: [],
  total: 0,
  inStockList: [],
  outStockList: []
}
const mutations = {
  GETALLGOODS(state, res) {
    state.allList = res.records
    state.total = res.total
  },
  GETINSTOCK(state, res) {
    state.inStockList = res.records
  },
  GETOUTLIST(state, res) {
    state.outStockList = res.records
  }
}
const actions = {
  async getAllGoods({ commit }, form) {
    let res = await reqGetAllGoods(form.page, form.limit)
    if (res.code === 200) {
      console.log(res.result)
      commit('GETALLGOODS', res.result)
    }
  },
  async editGoods({ commit }, form) {
    let res = await reqEditGoods(form)
    console.log(res)
    if (res.code === 200) {
      alert('编辑成功')
      location.reload()
    }
  },
  async addGood({ commit }, addform) {
    let res = await reqAddGoods(addform)
    console.log(res)
    if (res.code === 200) {
      alert('编辑成功')
      location.reload()
    }
  },
  async delGood({ commit }, id) {
    let res = await reqDelGoods(id)
    console.log(res)
    if (res.code === 200) {
      alert('删除成功')
      location.reload()
    }
  },
  // 入库新增
  async goodInStock({ commit }, form) {
    let res = await reqInStock(form)
    console.log(res)
    if (res.code === 200) {
      alert('添加成功')
      setTimeout(() => {
        location.reload()
      }, 2000)
    }
  },
  // 获取入库记录
  async getInStock({ commit }, shopId) {
    let res = await reqGetInStock(shopId)
    if (res.code === 200) {
      console.log(res.result)
      commit('GETINSTOCK', res.result)
    }
  },
  // 出库新增
  async getOutStock({ commit }, form) {
    let res = await reqOutStock(form)
    if (res.code === 200) {
      alert('出库已记录')
      setTimeout(() => {
        location.reload()
      }, 2000)
    }
  },
  // 获取出库记录
  async getOutStockList({ commit }, shopId) {
    let res = await reqGetOutStock(shopId)
    if (res.code === 200) {
      console.log(res.result)
      commit('GETOUTLIST', res.result)
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
