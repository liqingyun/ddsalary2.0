<template>
  <div class="footerList">
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="salaryHome">
        <icon slot="icon" name="icon_salary" scale="2.2"></icon>
        工资条
      </mt-tab-item>
      <mt-tab-item id="personalCenter">
        <icon slot="icon" name="icon_my" scale="2.2"></icon>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    let nowPage = this.$route.path.replace('/', '')
    if (nowPage === '') {
      nowPage = 'salaryHome'
    }
    return {
      selected: nowPage
    }
  },
  watch: {
    selected: function (val, oldVal) {
      if (val === 'salaryHome') {
        val = '/salaryHome'
        this.$router.push('/salaryHome')
      } else {
        this.$router.push('/' + val)
      }
    }
  }
}
</script>

<style lang="sass">
  .footerList
    position: fixed
    left: 0
    bottom: 0
    z-index: 100
    height: 43px
    width: 100%
    box-sizing: border-box
    border-top: 1px solid #d0d0d0
    .mint-tab-item
      padding: 2px 0
      .mint-tab-item-icon
        margin: 0 auto 2px
    .mint-tabbar
      .is-selected
        background-color: #eaeaea
</style>
