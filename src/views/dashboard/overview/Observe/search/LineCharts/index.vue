<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <div class="header">
      <span>交易笔数</span>
    </div>
    <div class="main">
      <span></span>
      <span></span>
    </div>
    <div class="footer">
      <div ref="charts" class="charts"></div>
    </div>
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
          type: 'line',
          data: [10, 7, 33, 12],
          // 拐点样式
          itemStyle: {
            opacity: 0
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'purple'
                },
                {
                  offset: 1,
                  color: '#fff'
                }
              ],
              global: false
            }
          }
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

<style scoped>
  .header{
    display: flex;
    align-items: center;
  }
  .charts{
    width: 100%;
    height: 50px;
  }
</style>
