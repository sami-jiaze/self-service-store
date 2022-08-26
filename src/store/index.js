import Vue from 'vue'
import Vuex from 'vuex'

import user from './user.js'
import goods from './goods.js'
import shop from './shop.js'
import stock from './stock.js'
import supplier from './supplier.js'

import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    goods,
    shop,
    stock,
    supplier
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    // reducer(val) {
    //   return {
    //     // 只储存state中的username
    //     username: val.username
    //   }
    // }
    paths: ['shop']
  })]
})
