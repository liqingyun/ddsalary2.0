<template>
  <div class="salaryHistory">
    <!-- 头部 -->
    <mt-header class="salaryHome-header" fixed title="薪资记录">
      <router-link to="/salaryHome" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <div class="clear_margin"></div>
    <div class="salaryHistory-content">
      <!-- 信息选择 -->
      <div class="personal-information">
        <div class="information-box">
          <div class="headPortrait">
            <img src="../../../assets/image/default-teacher-avatar.png" width="40" alt="">
          </div>
          <div class="nickname-box">
            <h1 class="name">李青云</h1>
            <span class="title">前端开发</span>
          </div>
        </div>
        <div v-show="timeSlotBtn" class="timeSlot-box" @click="toggleTime()">
          <div class="button-box">
            {{timeSlot1}} 至 {{timeSlot2}}
            <icon style="color: #26a2ff" slot="icon" name="icon_downArrow" scale="2"></icon>
          </div>
        </div>
      </div>
      <!-- 列表 -->
      <div class="salaryHistory-list">
        <div class="itme-list" @click="clickGetCurrent(item)" v-for="(item, index) in salaryList">
          <mt-cell is-link style="border-bottom: 1px solid #e6e6e6" :title="item.time" :value="item.money" :key="index"></mt-cell>
        </div>
        <!-- 提示消息 -->
        <div class="NoRecord" v-show="NoRecord">
            <h1 class="NoRecord-text">你还没有薪资记录！</h1>
            <h1 class="NoRecord-text">快去工作吧！</h1>
            <div class="NoRecord-imgBox">
              <img class="NoRecord-img" src="../../../assets/image/work_character.png" alt="">
            </div>
        </div>
     </div>
    </div>
    <!-- 遮罩层 -->
    <mt-popup class="myPopup" v-model="timePopup" position="bottom">
      <div class="picker-bg">
        <mt-header class="popup-head">
            <mt-button @click="timePopup = !timePopup" slot="left">取消</mt-button>
            <mt-button @click="confirmTime()"slot="right">确认</mt-button>
        </mt-header>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      </div>
    </mt-popup>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        NoRecord: false,
        timeSlotBtn: true,
        information: {
          url: window.headerimg,
          nickname: window.name,
          title: window.position
        },
        slots: [
          {
            flex: 1,
            values: ['2017年03月', '2017年04月', '2017年05月', '2017年06月', '2017年07月', '2017年08月'
            ],
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['2017年03月', '2017年04月', '2017年05月', '2017年06月', '2017年07月', '2017年08月'
            ],
            className: 'slot3',
            textAlign: 'left'
          }
        ],
        salaryList: [
          {
            time: '2017年05月',
            money: '4887.10'
          },
          {
            time: '2017年04月',
            money: '4887.10'
          },
          {
            time: '2017年03月',
            money: '4887.10'
          }
        ],
        timePopup: false,
        timeSlot: '',
        timeSlot1: '2017.03',
        timeSlot2: '2017.07',
        dateStart: '',
        dateEnd: ''
      }
    },
    methods: {
      onValuesChange (picker, values) {  // 滑动时间滚轴  获取选中时间
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0])
        }
        this.dateStart = values[0]
        this.dateEnd = values[1]
      },
      confirmTime () {  // 点击确认  选择时间段  查询薪资记录
        this.timePopup = !this.timePopup
        this.timeSlot1 = this.dateStart.replace(/年/g, '.').replace(/月/g, '')
        this.timeSlot2 = this.dateEnd.replace(/年/g, '.').replace(/月/g, '')
      },
      toggleTime () {   //  切换日期选择
        var tmp = this
        console.log('点击选择日期')
        tmp.timePopup = !tmp.timePopup
        console.log(tmp.timePopup)
      },
      analogLoading () {    // 模拟加载   并 获取薪资记录列表
        this.$indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
        setTimeout(() => {
          this.$indicator.close()
        }, 1000)
      },
      clickGetCurrent (data) {
        this.$indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
        setTimeout(() => {
          this.$indicator.close()
          this.$router.replace('/recordDetails')
        }, 1000)
      }
    },
    mounted () {
      this.analogLoading()
    }
  }
</script>

<style lang="sass">
  .salaryHistory
    .salaryHistory-content
      background: #d5d5d5
      .personal-information
        display: -webkit-flex; /* Safari */
        display: flex
        justify-content: space-between
        align-items: center
        position: fixed
        top: 40px
        z-index: 40
        padding: 15px 10px
        width: 100%
        background: #fff
        box-sizing: border-box
        border-bottom: 1px solid #e6e6e6
        .information-box
          display: -webkit-flex; /* Safari */
          display: flex
          align-items: center
          .headPortrait
            border-radius: 50%
          .nickname-box
            display: inline-block
            margin-left: 10px
            .name
              font-size: 14px
            .title
              color: #888
              font-size: 10px
          @media (max-width: 320px)
            .title
              color: #888
              font-size: 10px
        .timeSlot-box
          .button-box
            display: inline-block
            padding: 5px 5px
            border: 1px solid #3397e4
            border-radius: 6px
            line-height: 20px
            font-size: 12px
            color: #26a2ff
            background: rgba(100, 151, 228, 0.2)
      .salaryHistory-list
        margin-top: 114px
        background: #fff
        .mint-cell
          border: 0px
          .mint-cell-wrapper
            background-size: 120% 0px
        .NoRecord
          width: 60%
          margin: 0 auto
          margin-top: 55%
          .NoRecord-text
            margin-bottom: 20px
            text-align: center
            color: #888
          .NoRecord-imgBox
            background: #e6e6e6
            border-radius: 50%
            padding: 25px
            box-sizing: border-box
            .NoRecord-img
              width: 100%
    .myPopup
      width: 100%
      .picker-bg
        width: 100%
        padding: 10px 0px 30px 0px
        background: #fff
        box-sizing: border-box
        .popup-head
          padding: 0px 20px
          padding-bottom: 10px
          background: #fff
          border-bottom: 1px solid #e6e6e6
          .mint-header-button
            text-align: center
          .mint-button
            font-size: 18px
            color: #26a2ff
        .picker
          margin-top: 30px
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
