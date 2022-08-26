<!-- eslint-disable vue/html-self-closing -->
<template>
  <div ref="charts" class="charts">

  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: '',
  mounted() {
    // eslint-disable-next-line prefer-const
    let lineCharts = echarts.init(this.$refs.charts)
    lineCharts.setOption({
      xAxis: {
        show: false,
        type: 'category'
      },
      yAxis: {
        show: false
      },
      series: [
        {
          type: 'bar',
          data: [10, 7, 33, 12]
        }
      ],
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    })
  }
}
</script>

<style>
  .charts{
    width: 100%;
    height: 100%;
  }
</style>
