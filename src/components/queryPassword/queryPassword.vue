<template>
  <div class="queryPassword">
    <!-- 头部 -->
    <mt-header class="queryPassword-header" fixed :title="pageTitle">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <div class="queryPassword-content">
      <!-- 请输入4位密码 -->
      <div class="inputPassword">
        <!-- 文字 提示 -->
        <h2 class="icon-text">
          <icon style="color: #333" slot="icon" name="password" scale="3"></icon>
          <span class="text">请输入四位数密码</span>
        </h2>
        <!-- 输入格子 -->
        <ul class="inputBox">
          <li class="liBox">
            <span class="spot" v-show="storageNumber.length >= 1"></span>
          </li>
          <li class="liBox">
            <span class="spot" v-show="storageNumber.length >= 2"></span>
          </li>
          <li class="liBox">
            <span class="spot" v-show="storageNumber.length >= 3"></span>
          </li>
          <li class="liBox">
            <span class="spot" v-show="storageNumber.length >= 4"></span>
          </li>
        </ul>
      </div>
      <!-- 键盘 -->
      <div class="keyboard">
        <ul class="number-ul">
          <li class="number-li" v-for="n in 9">
            <button class="numberBtn" @click="getNumber(n)" type="button">{{n}}</button>
          </li>
          <li class="null-li"><button type="button">0</button></li>
          <li class="number-li"><button class="numberBtn" @click="getNumber(0)" type="button">0</button></li>
          <li class="btn-li">
            <button @touchstart="deleteNumber()" type="button">
              <icon style="color: #333" slot="icon" name="backspace" scale="4"></icon>
            </button>
          </li>
          <li class="clear"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Header, Button, Field, Toast } from 'mint-ui'
  export default {
    components: {
      'mt-header': Header,
      'mt-button': Button,
      'mt-field': Field
    },
    data () {
      return {
        storageNumber: [],
        numberBtn: null,
        password: '1014',  // 模拟密码
        passwordNumber: 5,  // 记录输入密码次数
        pageTitle: '查询密码验证',
        First: true
      }
    },
    methods: {
      getNumber (num) { // 获得键盘 数字
        console.log(num)
        this.storageNumber.push(num)
        console.log(this.storageNumber)
        this.numberBtn = document.getElementsByClassName('numberBtn')
        var tmp = this.$router
        // 判断 当输入密码长度为 4 为时 获取到密码  做各种判断
        if (this.storageNumber.length === 4 && this.password !== '') {  // 判断 密码是否 存在 并且 按钮变为不可点击状态
          // console.log(this.numberBtn)
          // this.storageNumber = parseInt(this.storageNumber.join(''))  // 当输入 满足 4位数的时候  把数组转化为 数字
          this.storageNumber = this.storageNumber.join('') // 数组转为 字符串
          console.log(this.storageNumber)
          // for (let i = 0; i < this.numberBtn.length; i++) {  // 按钮变为不可点击状态
          //   this.numberBtn[i].disabled = true
          // }
          this.passwordNumber--
          if (this.storageNumber === this.password) {
            console.log('输完密码，直接跳转')   // 输完密码做个 判断是否 正确
            Toast({
              message: '验证成功',
              duration: 2000
            })
            setTimeout(() => {
              tmp.replace('/salaryHome')
            }, 2000)
          } else {
            this.storageNumber = []   // 当前数组 变为空数组
            console.log(this.passwordNumber)
            if (this.passwordNumber === 0) {
              console.log('直接跳转到找回密码')
            } else {
              Toast({
                message: '密码错误,还有' + this.passwordNumber + '次机会',
                duration: 2000,
                className: 'toast-message'
              })
            }
          }
        } else if (this.storageNumber.length === 4 && this.password === '') {  // 当密码等于 4 为时
          console.log('把获取到的密码添加到数据库')
          this.password = this.storageNumber.join('') // 数组转为 字符串
          console.log(this.password)
          this.storageNumber = []   // 当前数组 变为空数组
        }
      },
      deleteNumber () {
        this.storageNumber.pop()
        console.log(this.storageNumber)
        if (this.storageNumber.length < 4) {  // 点击删除 当长度小于 4 按钮重新变为  可点击
          for (let i = 0; i < this.numberBtn.length; i++) {
            this.numberBtn[i].disabled = false
          }
        }
      }
    },
    mounted () {
      if (!this.First) {
        this.pageTitle = '请设置安全密码'
        this.password = ''
      }
    }
  }
</script>

<style lang="sass">
  .queryPassword
    .queryPassword-header
    .queryPassword-content
      margin-top: 50px
      .inputPassword
        margin-top: 30%
        .icon-text
          text-align: center
          .text
            vertical-align: middle
        .inputBox
          display: -webkit-flex /* Safari */
          display: flex
          justify-content: space-around
          padding: 0px 10%
          margin-top: 30px
          .liBox
            width: 50px
            height: 50px
            border: 2px solid #3397e4
            .spot
              display: block
              width: 25px
              height: 25px
              background: #0475cc
              border-radius: 50%
              margin: 0px auto
              margin-top: 12.5px
      .keyboard
        position: fixed
        bottom: 0px
        width: 100%
        .number-ul
          li
            border-top: 1px solid #c2c2c2
            border-right: 1px solid #c2c2c2
            box-sizing: border-box
          .clear
            clear: both
          .null-li
            width: 33.3333333%
            background: #e2e2e2
            float: left
            button
              display: block
              padding: 20px 0px
              width: 100%
              border: 0px
              visibility: hidden
              outline: none
              font-size: 20px
          .number-li
            float: left
            width: 33.3333333%
            text-align: center
            button
              &:active
                background: #e2e2e2
              display: block
              padding: 20px 0px
              width: 100%
              border: 0px
              outline: none
              background: #f7f7f7
              font-size: 20px
          .btn-li
            float: left
            width: 33.3333333%
            background: #e2e2e2
            vertical-align: middle
            button
              display: block
              padding: 13px 0px
              width: 100%
              border: 0px
              outline: none
</style>
