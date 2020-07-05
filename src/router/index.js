import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddFace from '@/components/AddFace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-face',
      name: 'AddFace',
      component: AddFace
    }
  ]
})
