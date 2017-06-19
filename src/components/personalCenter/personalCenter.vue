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
      <div class="personalInformationBox">

      </div>
      <!-- 功能列表 -->
      <ul class="personalFunctionList">
        <li></li>
      </ul>
    </div>
    <!-- 底部 -->
    <my-footer></my-footer>
  </div>
</template>

<script>
import Footer from '../footer/footer'
export default {
  components: {
    'my-footer': Footer
  }
}
</script>

<style lang="sass">
  .personalCenter
    height: 100%
    background: #f2f2f2
    .personalCenter-header
    .personalCenter_content

</style>
