<template>
  <div class="loadFailure">
    <!-- 头部 -->
    <mt-header class="salaryHome-header" fixed title="网络加载超时">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="clear_margin"></div>
    <div class="loadFailure-content">
      <div class="imgBox">
        <img src="../../assets/image/monster_bg.png" alt="">
      </div>
      <p class="prompt-text">你的网页被怪兽吃了，请重新获取。</p>
      <div class="btnBox">
          <mt-button @click="refresh()" class="refreshBtn" type="default" size="large">点击获取</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
      }
    },
    methods: {
      refresh () {
        console.log('刷新当前页面')
        window.location.reload()
      }
    },
    mounted () {
    }
  }
</script>

<style lang="sass">
  .loadFailure
    .loadFailure-content
      padding-top: 40%
      .imgBox
        width: 50%
        margin: 0px auto
        img
          width: 100%
      .prompt-text
        text-align: center
        margin-top: 15px
        color: #666
        padding: 10px 0px
      .btnBox
        margin-top: 30px
        padding: 0px 20%
        .refreshBtn
          background: #56d176
          color: #fff
</style>
