<template>
  <!-- 个人中心 -->
  <div class="personalCenter">
    <mt-header class="personalCenter-header" fixed title="个人中心">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <div class="clear_margin">
    </div>
    <div class="personalCenter_content">
      <!-- 个人信息 -->
      <div class="personalInformationBox" @click="jumpPersonalData()">
        <!-- 信息内容 -->
        <div class="information_content">
          <!-- 头像 -->
          <div class="header_imgBox">
            <img src="../../assets/image/head_Img.png" alt="">
          </div>
          <!-- 信息 -->
          <div class="information_textBox">
            <!-- 上 -->
            <div class="information_top">
              <h2 class="userNaem">李青云</h2>
              <span class="phoneNumber">13085352685</span>
            </div>
            <!-- 下 -->
            <div class="information_bottom">
              <!-- 部门 -->
              <span class="department">云计算事业部</span> |
              <span class="jobPosition">前端开发工程师</span>
            </div>
          </div>
        </div>
        <!-- 修改图标 -->
        <div class="icon_InformationBox">
          <icon slot="icon" style="color: #9a9a9a;" name="icon_modifyInformation" scale="3"></icon>
        </div>
      </div>
      <!-- 功能列表 -->
      <ul class="personalFunctionList">
        <li class="personalFunctionItem">
          <mt-cell title="我的反馈" is-link>
            <icon slot="icon" class="iconStyle" name="icon_feedback" scale="2.8"></icon>
          </mt-cell>
        </li>
        <li class="personalFunctionItem">
          <mt-cell title="密码设置" is-link value="修改" to="/setPassword">
            <icon slot="icon" class="iconStyle" name="icon_modifyPassword" scale="2.8"></icon>
          </mt-cell>
        </li>
      </ul>
    </div>
    <!-- 底部 -->
    <my-footer></my-footer>
  </div>
</template>

<script>
import Footer from '../footer/footer'
export default {
  methods: {
    jumpPersonalData () {
      this.$router.push('/personalData')
    }
  },
  components: {
    'my-footer': Footer
  }
}
</script>

<style lang="sass">
  .personalCenter
    height: 100%
    background: #f1f1f1
    .personalCenter-header
    .personalCenter_content
      margin-top: 50px
      .personalInformationBox
        padding: 0px 15px
        background: #fff
        display: -webkit-flex
        display: flex
        flex-direction: row
        justify-content: space-between
        align-items: center
        .information_content
          display: -webkit-flex
          display: flex
          flex-direction: row
          align-items: center
          .information_textBox
            margin-left: 10px
            .information_top
              display: -webkit-flex
              display: flex
              flex-direction: row
              align-items: center
              .userNaem
                margin-right: 10px
              .phoneNumber
                font-size: 13px
                color: #9d9d9d
            .information_bottom
              margin-top: 13px
              font-size: 12px
              color: #acb9b9
      @media (max-height: 568px)
        .personalInformationBox
          height: 90px
        .header_imgBox
          width: 53px
          height: 53px
          img
            width: 100%
      @media (min-height: 569px) and (max-height: 667px)
        .personalInformationBox
          height: 100px
        .header_imgBox
          width: 60px
          height: 60px
          img
            width: 100%
      @media (min-height: 668px)
        .personalInformationBox
          height: 110px
        .header_imgBox
          width: 70px
          height: 70px
          img
            width: 100%
      .personalFunctionList
        margin-top: 10px
        padding: 0px 10px
        background: #fff
        .personalFunctionItem
          border-bottom: 1px solid #dedede
          &:last-child
            border: none
          .mint-cell
            min-height: 40px
          .mint-cell-wrapper
            padding: 0px
            .mint-cell-text
              font-size: 14px
            .mint-cell-value
              span
                font-size: 12px
          // 公共的 icon 样式
          .iconStyle
            color: #26a2ff
</style>
