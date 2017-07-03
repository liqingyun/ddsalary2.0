<template>
  <!-- 工资条首页 -->
  <div class="salaryHome">
    <!-- 头部 -->
    <mt-header class="salaryHome-header" fixed title="工资条首页">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 首页内容 -->
    <div class="salaryHome_content">
      <!-- 上部分内容 -->
      <div class="mainContent_topBox">
        <!-- 标题 -->
        <div class="topPart_titleBox">
          <icon slot="icon" style="color: 1892ff;" name="icon_home_salaryGrant" scale="2.2"></icon>
          <span class="titleText">2017年7月份工资</span>
          <button class="iconMoreBtn" @click="seeMoreFun()" type="button" name="button">
            <icon slot="icon" style="color: 1892ff;" name="icon_more" scale="2"></icon>
          </button>
        </div>
        <!-- 薪资数据显示 -->
        <div class="topPart_mainContent">{{homeSalary}}</div>
      </div>
      <!-- 下部分内容 -->
      <div class="mainContent_bottomBox">
        <!-- top 标题 -->
        <div class="bottomPart_topTitle">
          <!-- 年份 -->
          <button class="selectYearBtn" @click="selectYearFun()" type="button" name="button">
            <span class="yearText">2017</span>
            <icon slot="icon" style="color: 1892ff;" name="icon_downArrow" scale="2"></icon>
          </button>
        </div>
        <!-- middle 薪资显示 -->
        <div class="bottomPart_middleModular">
          <!-- 左边 显示月 -->
          <div class="left_monthlySalary">
            <!-- 收入显示 -->
            <h3 class="salaryDisplay">{{monthlyAverageSalary}}</h3>
            <!-- 下标题 -->
            <span class="subtitleText">月均</span>
          </div>
          <!-- 右边 显示年 -->
          <div class="right_annualSalary">
            <!-- 收入显示 -->
            <h3 class="salaryDisplay">{{yearTotalSalary}}</h3>
            <!-- 下标题 -->
            <span class="subtitleText">总收入</span>
          </div>
          <div class="clearfix"></div>
        </div>
        <!-- bottom 统计图表 -->
        <div class="bottomPart_bottomChart">
          <my-lineExample
          :options="{responsive: false, maintainAspectRatio: false}"
          :width="400"
          :height="200"
          ></my-lineExample>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <my-footer></my-footer>
  </div>
</template>

<script>
import Footer from '../footer/footer'
import LineExample from '../LineChart/LineChart'
export default {
  data () {
    return {
      homeSalary: '暂无数据', // 首页薪资数据，如果没有数据的时候(暂无数据)
      monthlyAverageSalary: '********元', // 每月平均薪资，如果没有数据的时候(********元)
      yearTotalSalary: '********元' // 每年总薪资，如果没有数据的时候(********元)
    }
  },
  methods: {
    seeMoreFun () { // 更多按钮
      console.log('查看更多')
    },
    selectYearFun () { // 选择年份按钮
      console.log('选择年份')
    }
  },
  components: {
    'my-footer': Footer,
    'my-lineExample': LineExample
  }
}
</script>

<style lang="sass">
  .salaryHome
    .salaryHome-header
    .salaryHome_content
      margin-top: 40px
      padding: 15px
      .mainContent_topBox
        border: 1px solid #e4e4e4
        border-radius: 6px
        .topPart_titleBox
          padding: 10px 15px
          border-bottom: 1px solid #e4e4e4
          position: relative
          .titleText
            vertical-align: middle
            position: relative
            top: 2px
            font-size: 14px
          .iconMoreBtn
            position: absolute
            right: 10px
        .topPart_mainContent
          padding: 10px
          text-align: center
          font-size: 28px
          color: #1892ff
      .mainContent_bottomBox
        border: 1px solid #e4e4e4
        border-radius: 6px
        margin-top: 15px
        .bottomPart_topTitle
          padding: 5px 0px
          text-align: center
          .selectYearBtn
            .yearText
              font-size: 15px
              padding: 0px 5px
              vertical-align: middle
        .bottomPart_middleModular
          .left_monthlySalary, .right_annualSalary
            width: 50%
            float: left
            height: 50px
            text-align: center
            box-sizing: border-box
            padding: 12px 0px
            .salaryDisplay
              color: #1892ff
            .subtitleText
              font-size: 12px
              color: #666
          .left_monthlySalary
            background: #dff2ff
          .right_annualSalary
            background: #bee0fb
        .bottomPart_bottomChart
          padding: 10px
          box-sizing: border-box
</style>
