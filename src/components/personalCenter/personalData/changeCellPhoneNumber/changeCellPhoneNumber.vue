<template>
  <!-- 更换手机号码 -->
  <div class="changeCellPhoneNumber">
    <!-- 头部 -->
    <mt-header class="changeCellPhoneNumber-header" fixed title="更换手机号">
      <router-link to="/personalData" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="changeCellPhoneNumber_content">
      <!-- 手机图标 -->
      <div class="icon_PhoneBox">
        <icon class="icon_bindMobilePhoneNumber" slot="icon" name="icon_bindMobilePhoneNumber" scale="8"></icon>
      </div>
      <!-- 文字提示 -->
      <div class="promptInformationBox">
        <!-- 当前手机号 -->
        <h3 class="currentMobileNumber">当前手机号码：13085352685</h3>
        <!-- 提示信息 -->
        <p class="promptText">此手机号将作为身份验证所用，更换后企业档案中</p>
        <p class="promptText">预留的号码将会变更，请谨慎更换</p>
      </div>
      <!-- 跟换按钮 -->
      <div class="changeCellPhoneNumberBtnBox">
        <button class="changeCellBtn" @click="jumpChangeCellFun()" type="button" name="button">更换手机号码</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jumpChangeCellFun () {
      this.$router.push('/bindNewPhoneNumber')
      console.log('/bindNewPhoneNumber')
    }
  }
}
</script>

<style lang="sass">
  .changeCellPhoneNumber
    background: #fff
    .changeCellPhoneNumber-header
    .changeCellPhoneNumber_content
      margin-top: 50px
      .icon_PhoneBox
        padding: 50px 50px 30px 50px
        margin: 0px auto
        text-align: center
        .icon_bindMobilePhoneNumber
          color: #45a7ff
      .promptInformationBox
        text-align: center
        .currentMobileNumber
          margin-bottom: 20px
          font-size: 14px
        .promptText
          padding: 5px
          color: #666
          font-size: 10px
          -webkit-text-size-adjust: none
      .changeCellPhoneNumberBtnBox
        margin-top: 30px
        .changeCellBtn
          display: block
          margin: 0px auto
          width: 70%
          height: 30px
          font-size: 14px
          color: #fff
          font-weight: 500
          background: #1892ff
          border-radius: 6px
</style>
