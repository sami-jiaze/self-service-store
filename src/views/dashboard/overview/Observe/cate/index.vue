<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <div class="category-header">
          <span>销售额类别占比</span>
          <!-- <el-radio-group v-model="value">
            <el-radio-button label="零食"></el-radio-button>
            <el-radio-button label="生活用品"></el-radio-button>
            <el-radio-button label="饮料"></el-radio-button>
            <el-radio-button label="香烟"></el-radio-button>
          </el-radio-group> -->
        </div>
      </div>
      <div>
        <div ref="charts" class="charts"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data() {
    return {
      value: '全部渠道'
    }
  },
  mounted() {
    // eslint-disable-next-line prefer-const
    let mycharts = echarts.init(this.$refs.charts)
    mycharts.setOption({
      title: {
        text: '合计',
        subtext: 2011,
        left: 'center',
        top: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'outer'
          },
          labelLine: {
            show: true
          },
          data: [
            { value: 1048, name: '香烟' },
            { value: 735, name: '生活用品' },
            { value: 580, name: '零食' },
            { value: 484, name: '学习用品' },
            { value: 300, name: '饮料' }
          ]
        }
      ]
    })
    mycharts.on('mouseover', (params) => {
      const { name, value } = params.data
      mycharts.setOption({
        title: {
          text: name,
          subtext: value
        }
      })
    })
  }
}
</script>

<style scoped>
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header {
  border-bottom: 1px solid #eee;
}
.charts {
  width: 100%;
  height: 300px;
}
</style>
