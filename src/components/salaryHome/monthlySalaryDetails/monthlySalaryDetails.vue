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
        <mt-cell v-show="allowanceState" title="岗位薪资" :value="allowance"></mt-cell>
        <mt-cell v-show="achievements_deductionState" title="绩效薪资" :value="achievements_deduction"></mt-cell>
        <mt-cell v-show="workingYearsState" title="工龄津贴" :value="workingYears"></mt-cell>
        <!-- <mt-cell v-show="otherAllowanceState" title="其他津贴" :value="otherAllowance"></mt-cell> -->
        <mt-cell v-show="otherBonusState" title="奖金" :value="otherBonus"></mt-cell>

      </div>
      <!-- 扣减工资 -->
      <div class="deductSalary">
        <mt-cell v-show="notpunchState" title="缺卡" :value="notpunch"></mt-cell>
        <mt-cell v-show="lateState" title="迟到" :value="late"></mt-cell>
        <mt-cell v-show="compassionateState" title="事假" :value="compassionate"></mt-cell>
        <mt-cell v-show="sickleaveState" title="病假" :value="sickleave"></mt-cell>
        <mt-cell v-show="absenteeismState" title="旷工" :value="absenteeism"></mt-cell>
        <mt-cell v-show="baoxian_aState" title="医疗保险" :value="baoxian_a"></mt-cell>
        <mt-cell v-show="baoxian_bState" title="失业保险" :value="baoxian_b"></mt-cell>
        <mt-cell v-show="baoxian_cState" title="养老保险" :value="baoxian_c"></mt-cell>
        <mt-cell v-show="otherDeductionsState" title="其他" :value="otherDeductions"></mt-cell>
        <mt-cell v-show="incomeState" title="个税" :value="income"></mt-cell>
      </div>
      <!-- 确认按钮 -->
      <div class="confirmButton">
        <p>温馨提示：工资属于敏感信息，请注意保密。</p>
        <mt-button @click="clickConfirm()" type="primary" class="btnText" size="large">{{btnText}}</mt-button>
        <p>如内容无异，请确认工资信息。</p>
      </div>
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        sheetVisible: false,
        btnText: '确认以上信息',
        actions: [
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
        status: true  // 工资条发布状态  1 发布   0 未发布
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
      .salaryPayable, .deductSalary, .confirmButton
        padding: 0px 15px
        background: #fff
        .mint-cell
          &:last-child
            .mint-cell-wrapper
              border: none
          .mint-cell-wrapper
            background-size: 120% 0px
            border-bottom: 1px solid #e6e6e6
            padding: 0 2px
          .mint-cell-text, .mint-cell-value
            font-size: 14px
        .salaryPayableTitle, .deductSalaryTitle
          display: -webkit-flex /* Safari */
          display: flex
          justify-content: space-between
          padding: 10px 0px
          .salaryPayableTitle-text, .deductSalaryTitle-text, .salaryPayableTitle-total, .deductSalaryTitle-total
            color: #ff6f02
      .salaryPayable
        padding-top: 20px
      .deductSalary
        margin-top: 20px
        padding-top: 20px
      .confirmButton
        margin-top: 20px
        padding-top: 20px
        p
          padding: 15px 0px
          font-size: 14px
          color: #666
</style>
