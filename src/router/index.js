import Vue from 'vue'
import Router from 'vue-router'
import QueryPassword from '@/components/queryPassword/queryPassword'
import SalaryHome from '@/components/salaryHome/salaryHome'
import PersonalCenter from '@/components/personalCenter/personalCenter'
import PersonalData from '@/components/PersonalCenter/personalData/personalData'
import SetPassword from '@/components/setPassword/setPassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QueryPassword',
      component: QueryPassword
    },
    {
      path: '/salaryHome',
      name: 'SalaryHome',
      component: SalaryHome
    },
    {
      path: '/personalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    {
      path: '/personalData',
      name: 'PersonalData',
      component: PersonalData
    },
    {
      path: '/setPassword',
      name: 'SetPassword',
      component: SetPassword
    }
  ]
})
