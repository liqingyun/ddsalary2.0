import Vue from 'vue'
import Router from 'vue-router'
import QueryPassword from '@/components/queryPassword/queryPassword'
import SalaryHome from '@/components/salaryHome/salaryHome'
import PersonalCenter from '@/components/personalCenter/personalCenter'
import PersonalData from '@/components/PersonalCenter/personalData/personalData'
import SetPassword from '@/components/setPassword/setPassword'
import ChangeCellPhoneNumber from '@/components/PersonalCenter/personalData/changeCellPhoneNumber/changeCellPhoneNumber'
import BindNewPhoneNumber from '@/components/PersonalCenter/personalData/changeCellPhoneNumber/bindNewPhoneNumber/bindNewPhoneNumber'
import MonthlySalaryDetails from '@/components/salaryHome/monthlySalaryDetails/monthlySalaryDetails'
import SalaryHistory from '@/components/salaryHome/salaryHistory/salaryHistory'
import RecordDetails from '@/components/salaryHome/recordDetails/recordDetails'

Vue.use(Router)

export default new Router({
  routes: [
    // 查询密码
    {
      path: '/',
      name: 'QueryPassword',
      component: QueryPassword
    },
    // 工资条首页
    {
      path: '/salaryHome',
      name: 'SalaryHome',
      component: SalaryHome
    },
    // 工资条个人中心
    {
      path: '/personalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    // 个人资料 (放弃)
    {
      path: '/personalData',
      name: 'PersonalData',
      component: PersonalData
    },
    // 设置密码
    {
      path: '/setPassword',
      name: 'SetPassword',
      component: SetPassword
    },
    // 换绑电话(放弃)
    {
      path: '/changeCellPhoneNumber',
      name: 'ChangeCellPhoneNumber',
      component: ChangeCellPhoneNumber
    },
    // 绑定电话 (放弃)
    {
      path: '/bindNewPhoneNumber',
      name: 'BindNewPhoneNumber',
      component: BindNewPhoneNumber
    },
    // 当月薪资 详情
    {
      path: '/monthlySalaryDetails',
      name: 'MonthlySalaryDetails',
      component: MonthlySalaryDetails
    },
    // 薪资历史 详情
    {
      path: '/salaryHistory',
      name: 'SalaryHistory',
      component: SalaryHistory
    },
    // 薪资明细 详情
    {
      path: '/recordDetails',
      name: 'RecordDetails',
      component: RecordDetails
    }
  ]
})
