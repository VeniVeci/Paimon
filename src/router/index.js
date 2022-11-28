import Vue from 'vue'
import Router from 'vue-router'
import YS from '@/components/YS'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'YS',
      component: YS
    }
  ]
})
