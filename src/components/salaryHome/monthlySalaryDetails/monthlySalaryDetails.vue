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
          <li v-for="(item, index) in shouldSalaryList">
            <mt-cell v-show="allowanceState" :title="item.salaryTitle" ref="mintCell" @click.native="showFunction(index)" is-link :value="item.amountOfMoney"></mt-cell>
            <transition name="slide-fade">
              <div class="allowanceStyle" v-show="item.popupVisible">
                {{item.salaryLabel}}
              </div>
            </transition>
          </li>
        </ul>
        <!-- <mt-cell v-show="achievements_deductionState" title="绩效薪资" @click.native="showFunction()" :value="achievements_deduction"></mt-cell>
        <mt-cell v-show="workingYearsState" title="工龄津贴" :value="workingYears" is-link></mt-cell>
        <mt-cell v-show="otherAllowanceState" title="其他津贴" :value="otherAllowance"></mt-cell> -->
        <!-- <mt-cell v-show="otherBonusState" title="奖金" :value="otherBonus" is-link></mt-cell> -->
      </div>
      <!-- 扣减工资 -->
      <div class="deductSalary">
        <mt-cell v-show="notpunchState" title="缺卡" :value="notpunch" is-link></mt-cell>
        <mt-cell v-show="lateState" title="迟到" :value="late" is-link></mt-cell>
        <mt-cell v-show="compassionateState" title="事假" :value="compassionate" is-link></mt-cell>
        <mt-cell v-show="sickleaveState" title="病假" :value="sickleave" is-link></mt-cell>
        <mt-cell v-show="absenteeismState" title="旷工" :value="absenteeism" is-link></mt-cell>
        <mt-cell v-show="baoxian_aState" title="医疗保险" :value="baoxian_a" is-link></mt-cell>
        <mt-cell v-show="baoxian_bState" title="失业保险" :value="baoxian_b" is-link></mt-cell>
        <mt-cell v-show="baoxian_cState" title="养老保险" :value="baoxian_c" is-link></mt-cell>
        <mt-cell v-show="otherDeductionsState" title="其他" :value="otherDeductions" is-link></mt-cell>
        <mt-cell v-show="incomeState" title="个税" :value="income" is-link></mt-cell>
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
            salaryState: false,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '绩效薪资',
            salaryLabel: '绩效薪资绩效薪资绩效薪资绩效薪资绩效薪资绩效薪资',
            salaryState: false,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '工龄津贴',
            salaryLabel: '工龄津贴工龄津贴工龄津贴工龄津贴工龄津贴工龄津贴',
            salaryState: false,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '奖金',
            salaryLabel: '奖金奖金奖金奖金奖金奖金奖金奖金奖金奖金奖金',
            salaryState: false,
            amountOfMoney: '0.00',
            popupVisible: false
          }
        ],
        deductionSalaryList: [
          {
            salaryTitle: '缺卡',
            salaryLabel: '缺卡缺卡缺卡缺卡缺卡缺卡缺卡缺卡缺卡缺卡缺卡',
            salaryState: false,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '迟到',
            salaryLabel: '迟到迟到迟到迟到迟到迟到迟到迟到迟到迟到迟到',
            salaryState: false,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '缺卡',
            salaryLabel: '缺卡缺卡缺卡缺卡缺卡缺卡缺卡缺卡缺卡缺卡缺卡',
            salaryState: false,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '事假',
            salaryLabel: '事假事假事假事假事假事假事假事假事假事假事假',
            salaryState: false,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '病假',
            salaryLabel: '病假病假病假病假病假病假病假病假病假病假病假',
            salaryState: false,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '旷工',
            salaryLabel: '旷工旷工旷工旷工旷工旷工旷工旷工旷工旷工旷工',
            salaryState: false,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '医疗保险',
            salaryLabel: '医疗保险医疗保险医疗保险医疗保险医疗保险医疗保险医疗保险',
            salaryState: false,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '失业保险',
            salaryLabel: '失业保险失业保险失业保险失业保险失业保险失业保险失业保险',
            salaryState: false,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '养老保险',
            salaryLabel: '养老保险养老保险养老保险养老保险养老保险养老保险养老保险',
            salaryState: false,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '其他',
            salaryLabel: '其他其他其他其他其他其他其他其他其他其他其他其他其他',
            salaryState: false,
            amountOfMoney: '0.00',
            popupVisible: false
          },
          {
            salaryTitle: '个税',
            salaryLabel: '个税个税个税个税个税个税个税个税个税个税个税个税个税',
            salaryState: false,
            amountOfMoney: '0.00',
            popupVisible: false
          }
        ],
        // 发放
        salaryPayableTotal: '0.00',  // 应发总计
        allowance: '0.00', // 岗位薪资
        allowanceState: true, // 岗位薪资状态
        achievements_deduction: '0.00', // 绩效薪资
        achievements_deductionState: true,  // 绩效薪资状态
        otherBonus: '0.00',  // 其他奖金
        otherBonusState: true, // 其他奖金状态
        workingYears: '0.00',  // 工龄工资
        workingYearsState: true,  // 工龄工资状态
        // 扣除
        compassionate: '0.00',  // 事假扣除
        compassionateState: true, // 事假扣除状态
        sickleave: '0.00', // 病假扣除
        sickleaveState: true, // 病假扣除状态
        leaveearly: '0.00', // 早退扣除
        leaveearlyState: true, // 早退扣除状态
        late: '0.00', // 迟到扣除
        lateState: true, // 迟到扣除状态
        notpunch: '0.00', // 却卡扣除
        notpunchState: true, // 却卡扣除状态
        income: '0.00', // 个人所得税
        incomeState: true,  // 个人所得税状态
        baoxian_a: '0.00', // 医保保险
        baoxian_aState: true, // 医保保险扣除状态
        baoxian_b: '0.00',  // 失业保险
        baoxian_bState: true, // 失业保险状态
        baoxian_c: '0.00', // 新增 养老保险
        baoxian_cState: true, // 新增养老保险状态
        otherDeductions: '0.00', // 其他扣除
        otherDeductionsState: true, // 其他扣除状态
        absenteeism: '0.00', // 旷工扣除
        absenteeismState: true, // 旷工扣除状态
        // 总计 时间
        realWages: '0.00',  // 实发工资
        realWagesState: true, // 实发工资状态
        dateInfo: '2017年7月',  // 时间
        status: true,  // 工资条发布状态  1 发布   0 未发布
        popupVisible: false,
        buttonBottom: 0
      }
    },
    methods: {
      showFunction (index) {
        var mintCellAllowBottom = this.$refs.mintCell[index].$el.children[4]
        if (this.shouldSalaryList[index].popupVisible) {
          this.shouldSalaryList[index].popupVisible = false
          mintCellAllowBottom.removeAttribute('id')
        } else {
          for (var i = 0; i < this.shouldSalaryList.length; i++) {
            if (this.shouldSalaryList[i].popupVisible) {
              this.shouldSalaryList[i].popupVisible = false
              this.$refs.mintCell[i].$el.children[4].removeAttribute('id')
            }
          }
          mintCellAllowBottom.setAttribute('id', 'mintCellAllowBottom')
          this.shouldSalaryList[index].popupVisible = true
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
        padding: 0px 10px
        background: #fff
        li
          &:last-child
            .mint-cell-wrapper
              border: none
        .mint-cell
          .mint-cell-wrapper
            background-size: 120% 0px
            border-bottom: 1px solid #e6e6e6
            padding: 0 2px
          #mintCellAllowBottom::after
            border: solid 2px #c8c8cd
            border-bottom-width: 0
            border-left-width: 0
            content: " "
            top: 40%
            right: 10px
            position: absolute
            width: 10px
            height: 10px
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
          padding: 10px 0px
          .salaryPayableTitle-text, .deductSalaryTitle-text, .salaryPayableTitle-total, .deductSalaryTitle-total
            color: #ff6f02
        .allowanceStyle
          width: 100%
          padding: 10px 10px
          font-size: 13px
          color: #666
          line-height: 20px
          background: #eaeaea
          box-sizing: border-box
      .salaryPayable
        padding-top: 20px
      .deductSalary
        margin-top: 20px
        padding-top: 20px
  .slide-fade-enter-active
    transition: all .3s
  .slide-fade-leave-active
    transition: all .8s
  .slide-fade-enter, .slide-fade-leave-active
    transform: translateX(10px)
    opacity: 0
</style>
