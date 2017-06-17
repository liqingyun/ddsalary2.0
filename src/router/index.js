import Vue from 'vue'
import Router from 'vue-router'
import QueryPassword from '@/components/queryPassword/queryPassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QueryPassword',
      component: QueryPassword
    }
  ]
})
