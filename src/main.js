// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Icon from './Icon'

Vue.use(MintUI)

Icon.inject('icon_downArrow') // 向下的箭头
Icon.inject('setting')
Icon.inject('backspace')
Icon.inject('password')
Icon.inject('icon_my')  // 我的
Icon.inject('icon_salary')  // 工资图标
Icon.inject('icon_phone')  // 通用手机图标
Icon.inject('icon_phone_input')  //  输入框 手机图标
Icon.inject('icon_security_input')  //  输入框  验证码安全
Icon.inject('icon_modifyPassword')   // 修改密码 (钥匙)
Icon.inject('icon_feedback')  //  意见反馈
Icon.inject('icon_modifyInformation')   //  修改信息
Icon.inject('icon_bindMobilePhoneNumber') // 绑定手机号码
Icon.inject('icon_queryPassword') // 查询密码 (进入时输入的 4 位数密码)
Icon.inject('icon_home_salaryGrant') // 首页 薪资发放

Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
