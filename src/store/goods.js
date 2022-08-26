/* eslint-disable prefer-const */
import { reqGetGoodsClass, reqAddGoodsClass, reqDelGoodsClass, reqEditGoodsClass, reqGetBestGoods } from '@/api/index.js'
const state = {
  goodClassForm: [],
  bestgoodsList: []
}
const mutations = {
  GETGOODCLASS(state, res) {
    state.goodClassForm = res
    console.log(state.goodClassForm)
  },
  BESTGOODSLIST(state, res) {
    state.bestgoodsList = res.result
  }
}
const actions = {
  async getGoodClass({ commit }) {
    let res = await reqGetGoodsClass()
    if (res.code === 200) {
      console.log(res)
      commit('GETGOODCLASS', res.result)
    }
  },
  async addGoodClass({ commit }, addForm) {
    let res = await reqAddGoodsClass(addForm)
    if (res.code === 200) {
      // console.log(res)
      alert('上传成功')
      location.reload()
    } else {
      alert('上传失败')
    }
  },
  async editGoodClass({ commit }, editForm) {
    let res = await reqEditGoodsClass(editForm)
    if (res.code === 200) {
      // console.log(res)
      alert('编辑成功')
      location.reload()
    } else {
      alert('编辑失败')
    }
  },
  async delGoodClass({ commit }, id) {
    let res = await reqDelGoodsClass(id)
    if (res.code === 200) {
      // console.log(res)
      alert('删除成功')
      location.reload()
    } else {
      alert('删除失败')
    }
  },
  async getBestGoods({ commit }, shopid) {
    let res = await reqGetBestGoods(shopid)
    if (res.code === 200) {
      console.log(res)
      commit('BESTGOODSLIST', res)
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
