// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// import './lib/mui/js/mui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.use(Mint)
//购物车使用vuex完成功能
import Vuex from 'vuex'
Vue.use(Vuex)
//获取用户购物车信息
var cart = JSON.parse(localStorage.getItem('cart') || '[]')
//创建一个公共的仓库
const store = new Vuex.Store({
  state: {
    cart: cart
  },
  mutations: {
    addToCar(state, goodsinfo) {
      var flag = false
      // 如果cart里面本来就有数据就只用改变商品的数量
      state.cart.some(item=>{
        if(item.id === goodsinfo.id){
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      // 如果cart里面没有数据就将numberbox里面的商品数据直接放入cart里面
      if(!flag) {
        state.cart.push(goodsinfo)
      }
    }
  },
  getters:{
    //计算属性获取小车里面数量总数
    getCartTotalNum(state) {
      var totalNum = 0;
      state.cart.forEach( item => {
        totalNum += parseInt(item.count)
      })
      return totalNum
    }

  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
