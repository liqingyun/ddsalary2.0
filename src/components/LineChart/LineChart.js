import {Line} from 'vue-chartjs'
export default Line.extend({
  mounted () {
    this.renderChart({
      labels: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
      datasets: [
        {
          label: '薪资',
          backgroundColor: '#dff2ff',
          data: [4000, 3900, 4110, 4050, 3980, 4080, 4050, 4000, 3900, 4110, 4050, 3980]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
})
