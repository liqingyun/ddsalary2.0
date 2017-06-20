<template>
  <div class="personalData">
    <!-- 头部 -->
    <mt-header class="personalData-header" fixed title="个人资料">
      <router-link to="/personalCenter" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 个人资料列表 -->
    <div class="clear_margin"></div>
    <div class="personalData_content">
      <ul class="personalDataList">
        <li class="personalDataItem">
          <mt-cell title="姓名" value="李青云"></mt-cell>
        </li>
        <li class="personalDataItem">
          <mt-cell title="手机" is-link value="13085352685"></mt-cell>
        </li>
        <li class="personalDataItem">
          <mt-cell title="所属部门" value="云计算事业部"></mt-cell>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
  .personalData
    height: 100%
    background: #f2f2f2
    .personalData_content
      margin-top: 50px
      .personalDataList
        padding: 0px 10px
        background: #fff
        .personalDataItem
          border-bottom: 1px solid #dedede
          &:last-child
            border: none
          .mint-cell-wrapper
            padding: 0px
          .mint-cell-value
            font-size: 14px
            margin-right: 30px
</style>
