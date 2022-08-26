import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/reset.css'
import VueWechatTitle from 'vue-wechat-title'
import VueParticles from 'vue-particles'
import Carousel from './components/Carousel.vue'
import moment from 'moment'

Vue.filter('dateFormat', (dateStr, pattern = 'YYYY-DD-MM HH:mm:ss') => {
  return moment(dateStr).format(pattern)
})

Vue.component(Carousel.name, Carousel)
Vue.use(VueParticles)
Vue.use(VueWechatTitle)// meta标题实时更新
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
