<template>
  <!-- 设置密码 -->
  <div class="setPasswordPage">
    <!-- 头部 -->
    <mt-header class="setPassword-header" fixed title="密码设置">
      <mt-button slot="left" icon="back" @click="setPasswordBack()">返回</mt-button>
    </mt-header>
    <!-- 内容 -->
    <div class="setPassword_content">
      <!-- banner 图片 -->
      <div class="bannerImgBox">
        <img class="bannerImg" src="../../assets/image/img_setPassword_banner.png" alt="">
      </div>
      <!-- 设置密码 表单内容 -->
      <div class="formContent">
        <ul>
          <li class="inputFormItem">
            <div class="iconInputBox">
              <icon slot="icon" style="color: #26a2ff;" name="icon_phone_input" scale="3"></icon>
            </div>
            <mt-field class="inputField inputPhoneNumber" placeholder="输入手机号" v-model="phoneNumber"></mt-field>
            <div class="clearfix"></div>
          </li>
          <li class="inputFormItem">
            <div class="iconInputBox">
              <icon slot="icon" style="color: #26a2ff;" name="icon_security_input" scale="3"></icon>
            </div>
            <mt-field class="inputField inputVerificationCode" placeholder="输入验证码" v-model="verificationCode"></mt-field>
            <div class="clearfix"></div>
            <a class="getVerificationCodeBtn" @click="getVerificationCodeBtn()" href="javascript:;">{{verificationCodeText}}</a>
          </li>
        </ul>
        <!-- 提交按钮 -->
        <div class="submitChangesBtnBox">
          <button class="changsBtn" type="button" name="button">提交修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phoneNumber: '',
      verificationCode: '',
      verificationCodeText: '获取短信验证码',
      nums: 60,
      clock: null
    }
  },
  methods: {
    getVerificationCodeBtn () {
      this.verificationCodeText = this.nums + '秒后可重新获取'
      this.clock = setInterval(this.doLoop, 1000)
    },
    doLoop () {
      this.nums--
      if (this.nums > 0) {
        this.verificationCodeText = this.nums + '秒后可重新获取'
      } else {
        clearInterval(this.clock) // 清除js定时器
        this.verificationBtn = '获取短信验证码'
        this.nums = 60 // 重置时间
      }
    },
    setPasswordBack () {
      // TODO 根据路由参数  判断跳转到输入密码  还是个人中心
      this.$router.push('/personalCenter')
    }
  }
}
</script>

<style lang="sass">
  .setPasswordPage
    .setPassword-header
    .setPassword_content
      margin-top: 40px
      .bannerImgBox
        .bannerImg
          width: 100%
      .formContent
        width: 75%
        margin: 20px auto 0px auto
        padding: 10px
        .inputFormItem
          border-bottom: 1px solid #26a2ff
          padding: 10px
          position: relative
          .mint-cell
            min-height: 0px
          .iconInputBox
            float: left
          .inputField
            width: 75%
            float: left
          .getVerificationCodeBtn
            position: absolute
            right: 0px
            top: 17px
            font-size: 12px
        .submitChangesBtnBox
          margin-top: 30px
          .changsBtn
            display: block
            width: 100%
            height: 35px
            background: #26a2ff
            color: #fff
            font-size: 16px
            font-weight: 600
            box-sizing: border-box
            border-radius: 6px
</style>
