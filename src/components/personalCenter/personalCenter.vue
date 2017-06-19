<template>
  <!-- 个人中心 -->
  <div class="personalCenter">
    <mt-header class="personalCenter-header" fixed title="个人中心">
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
</style>
