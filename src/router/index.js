import Vue from 'vue'
import Router from 'vue-router'
import Home from '../componets/Home.vue'
import Cart from '../componets/Cart.vue'
import Member from '../componets/Member.vue'
import Search from '../componets/Search.vue'
import Newlist from '../navDetail/Newlist.vue'
import Contact from '../navDetail/Contact.vue'
import Leavemessage from '../navDetail/Leavemessage.vue'
import Sharepicture from '../navDetail/Sharepicture.vue'
import Shopping from '../navDetail/Shopping.vue'
import Videolist from '../navDetail/Videolist.vue'
import NewsDetail from '../navDetail/NewsDetail.vue'
Vue.use(Router)
export default new Router({
  linkActiveClass: 'mui-active',
  routes: [{
      path: '/',
      component: Home,
      redirect: {
        path: '/home'
      }
    },
    {
      path: '/home',
      component: Home,
      name: 'home'
    },
    {
      path: '/cart',
      component: Cart,
      name: 'cart'
    },
    {
      path: '/member',
      component: Member,
      name: 'member'
    },
    {
      path: '/search',
      component: Search,
      name: 'search'
    },
    {
      path: '/home/newlist',
      component: Newlist,
      name: 'newlist'
    },
    {
      path: '/home/contact',
      component: Contact,
      name: 'contact'
    }, {
      path: '/home/leavemessage',
      component: Leavemessage,
      name: 'leavemessage'
    }, {
      path: '/home/sharepicture',
      component: Sharepicture,
      name: 'sharepicture'
    }, {
      path: '/home/shopping',
      component: Shopping,
      name: 'shopping'
    },
     {
       path: '/home/videolist',
       component: Videolist,
       name: 'videolist'
     },
     {
       path: '/home/newlist/newsdetail',
       component: NewsDetail,
       name: 'newsdetail'
     }

  ]
})
