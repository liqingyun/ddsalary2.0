<template>
  <!-- 工资条首页 -->
  <div class="salaryHome">
    <!-- 头部 -->
    <mt-header class="salaryHome-header" fixed title="工资条首页">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
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
  .salaryHome
    .salaryHome-header

</style>
