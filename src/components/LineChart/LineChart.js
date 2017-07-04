import {Line} from 'vue-chartjs'
export default Line.extend({
  props: ['lineChartData', 'labelsData'],
  mounted () {
    console.log(this.lineChartData)
    this.renderChart({
      labels: this.labelsData,
      datasets: [
        {
          label: '月薪',
          backgroundColor: '#dff2ff',
          data: this.lineChartData
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
})
