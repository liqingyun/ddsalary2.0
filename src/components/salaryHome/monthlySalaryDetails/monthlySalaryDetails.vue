<template>
  <div class="monthlySalaryDetails">
    <!-- 头部 -->
    <mt-header class="salaryHome-header" fixed title="当月薪资信息">
      <router-link to="/salaryHome" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <div class="clear_margin"></div>
    <div class="salaryDetails-content">
      <!-- 金额banner -->
      <div class="salaryDetails-banner">
          <div class="salary-text">
            <h2 class="date">{{dateInfo}}</h2>
            <h1 class="money"> {{realWages}}</h1>
          </div>
      </div>
      <!-- 应发工资 -->
      <div class="salaryPayable">
        <div class="salaryPayableTitle">
          <h2 class="salaryPayableTitle-text">应发金额</h2>
          <h2 class="salaryPayableTitle-total">￥{{salaryPayableTotal}}</h2>
        </div>
        <ul>
          <li v-for="(should, index) in shouldSalaryList">
            <mt-cell v-show="should.salaryState" :title="should.salaryTitle" ref="shouldCell" @click.native="shouldCellFunction(index)" is-link :value="should.amountOfMoney"></mt-cell>
            <transition name="slide-fade">
              <div class="allowanceStyle" v-show="should.popupVisible">
                <p class="detailsStyle">{{should.salaryLabel}}</p>
              </div>
            </transition>
          </li>
        </ul>
      </div>
      <!-- 扣减工资 -->
      <div class="deductSalary">
        <ul>
          <li v-for="(deduct, index) in deductionSalaryList">
            <mt-cell v-show="deduct.salaryState" :title="deduct.salaryTitle" ref="deductCell" @click.native="deductCellFunction(index)" is-link :value="deduct.amountOfMoney"></mt-cell>
            <transition name="slide-fade">
              <div class="allowanceStyle" v-show="deduct.popupVisible">
                <p class="detailsStyle">
                  {{deduct.salaryLabel}}
                </p>
              </div>
            </transition>
          </li>
        </ul>
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
        shouldSalaryList: [
          {
            salaryTitle: '岗位薪资',
            salaryLabel: '岗位薪资岗位薪资岗位薪资岗位薪资岗位薪资岗位薪资',
            salaryState: true,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '绩效薪资',
            salaryLabel: '绩效薪资绩效薪资绩效薪资绩效薪资绩效薪资绩效薪资',
            salaryState: true,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '工龄津贴',
            salaryLabel: '工龄津贴工龄津贴工龄津贴工龄津贴工龄津贴工龄津贴',
            salaryState: true,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '奖金',
            salaryLabel: '奖金奖金奖金奖金奖金奖金奖金奖金奖金奖金奖金',
            salaryState: true,
            amountOfMoney: '0.00',
            popupVisible: false
          }
        ],
        deductionSalaryList: [
          {
            salaryTitle: '缺卡',
            salaryLabel: '缺卡缺卡缺卡缺卡缺卡缺卡缺卡缺卡缺卡缺卡缺卡',
            salaryState: true,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '迟到',
            salaryLabel: '迟到迟到迟到迟到迟到迟到迟到迟到迟到迟到迟到',
            salaryState: true,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '缺卡',
            salaryLabel: '缺卡缺卡缺卡缺卡缺卡缺卡缺卡缺卡缺卡缺卡缺卡',
            salaryState: true,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '事假',
            salaryLabel: '事假事假事假事假事假事假事假事假事假事假事假',
            salaryState: true,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '病假',
            salaryLabel: '病假病假病假病假病假病假病假病假病假病假病假',
            salaryState: true,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '旷工',
            salaryLabel: '旷工旷工旷工旷工旷工旷工旷工旷工旷工旷工旷工',
            salaryState: true,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '医疗保险',
            salaryLabel: '医疗保险医疗保险医疗保险医疗保险医疗保险医疗保险医疗保险',
            salaryState: true,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '失业保险',
            salaryLabel: '失业保险失业保险失业保险失业保险失业保险失业保险失业保险',
            salaryState: true,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '养老保险',
            salaryLabel: '养老保险养老保险养老保险养老保险养老保险养老保险养老保险',
            salaryState: true,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '其他',
            salaryLabel: '其他其他其他其他其他其他其他其他其他其他其他其他其他',
            salaryState: true,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '个税',
            salaryLabel: '个税个税个税个税个税个税个税个税个税个税个税个税个税',
            salaryState: true,
            amountOfMoney: '0.00',
            popupVisible: false
          }
        ],
        // 总计 时间
        salaryPayableTotal: '0.00', // 应发金额
        realWages: '0.00',  // 实发工资
        realWagesState: true, // 实发工资状态
        dateInfo: '2017年7月',  // 时间
        status: true,  // 工资条发布状态  1 发布   0 未发布
        popupVisible: false,
        buttonBottom: 0
      }
    },
    methods: {
      shouldCellFunction (index) {
        // 先关闭下部分的 cell
        for (var k = 0; k < this.deductionSalaryList.length; k++) {
          if (this.deductionSalaryList[k].popupVisible) {
            this.deductionSalaryList[k].popupVisible = false
            this.$refs.deductCell[k].$el.children[4].removeAttribute('id')
          }
        }
        var mintCellAllowBottom = this.$refs.shouldCell[index].$el.children[4]
        if (this.shouldSalaryList[index].popupVisible) {
          this.shouldSalaryList[index].popupVisible = false
          mintCellAllowBottom.removeAttribute('id')
        } else {
          for (var i = 0; i < this.shouldSalaryList.length; i++) {
            if (this.shouldSalaryList[i].popupVisible) {
              this.shouldSalaryList[i].popupVisible = false
              this.$refs.shouldCell[i].$el.children[4].removeAttribute('id')
            }
          }
          mintCellAllowBottom.setAttribute('id', 'mintCellAllowBottom')
          this.shouldSalaryList[index].popupVisible = true
        }
      },
      deductCellFunction (index) {
        // 先关闭上部分的 cell
        for (var i = 0; i < this.shouldSalaryList.length; i++) {
          if (this.shouldSalaryList[i].popupVisible) {
            this.shouldSalaryList[i].popupVisible = false
            this.$refs.shouldCell[i].$el.children[4].removeAttribute('id')
          }
        }
        console.log(this.$refs.deductCell[index])
        // 下部分
        if (this.deductionSalaryList[index].popupVisible) {
          this.deductionSalaryList[index].popupVisible = false
          this.$refs.deductCell[index].$el.children[4].removeAttribute('id')
        } else {
          for (var j = 0; j < this.deductionSalaryList.length; j++) {
            if (this.deductionSalaryList[j].popupVisible) {
              this.deductionSalaryList[j].popupVisible = false
              this.$refs.deductCell[j].$el.children[4].removeAttribute('id')
            }
          }
          this.$refs.deductCell[index].$el.children[4].setAttribute('id', 'mintCellAllowBottom')
          this.deductionSalaryList[index].popupVisible = true
        }
      }
    }
  }
</script>

<style lang="sass">
  .monthlySalaryDetails
    .salaryDetails-content
      background: #f2f2f2
      margin-top: 39px
      .salaryDetails-banner
        background: #26a2ff
        width: 100%
        height: 120px
        padding: 6% 0
        text-align: center
        box-sizing: border-box
        .salary-text
          .date
            color: #fff
            font-size: 16px
          .money
            margin-top: 15px
            color: #fff
            font-size: 36px
      .salaryPayable, .deductSalary
        background: #fff
        li
          &:last-child
            .mint-cell-wrapper
              border: none
        .mint-cell
          padding: 0px 10px
          .mint-cell-wrapper
            background-size: 120% 0px
            border-bottom: 1px solid #e6e6e6
            padding: 0 2px
          .mint-cell-mask
            &::after
              background: #fff
          #mintCellAllowBottom::after
            border: solid 2px #c8c8cd
            border-bottom-width: 0
            border-left-width: 0
            content: " "
            top: 40%
            right: 10px
            position: absolute
            width: 8px
            height: 8px
            -webkit-transform: translateY(-50%) rotate(135deg)
            transform: translateY(-50%) rotate(135deg)
            .mint-cell-title
              width: 80%
          .mint-cell-text, .mint-cell-value
            font-size: 14px
          .mint-cell-label
            width: 90%
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
        .salaryPayableTitle, .deductSalaryTitle
          display: -webkit-flex /* Safari */
          display: flex
          justify-content: space-between
          padding: 10px
          .salaryPayableTitle-text, .deductSalaryTitle-text, .salaryPayableTitle-total, .deductSalaryTitle-total
            color: #ff6f02
        .allowanceStyle
          width: 100%
          background: #eaeaea
          box-sizing: border-box
          position: relative
          top: -1px
          .detailsStyle
            color: #666
            padding: 10px 10px
            min-height: 40px
            line-height: 20px
            font-size: 13px
      .salaryPayable
        padding-top: 20px
      .deductSalary
        margin-top: 20px
        padding-top: 20px
  // .slide-fade-enter-active
  //   transition: all .3s
  // .slide-fade-leave-active
  //   transition: all .8s
  // .slide-fade-enter, .slide-fade-leave-active
  //   height: 0px
  .slide-fade-enter-active, .slide-fade-leave-active
    transition: all .5s
  .slide-fade-enter-active
    height: 60px
    opacity: 1
  .slide-fade-enter, .slide-fade-leave-active
    height: 0
    opacity: 0
  .slide-fade-leave
    height: 60px
    opacity: 1
</style>
