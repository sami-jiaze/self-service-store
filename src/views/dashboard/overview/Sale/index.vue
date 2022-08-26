<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <el-card class="box-card" style="margin:10px 0px">
      <div slot="header" class="clearfix">
        <el-tabs v-model="activeName" class="tab">
          <el-tab-pane label="销售额" name="sale"></el-tab-pane>
        </el-tabs>
        <div class="right">
          <span @click="setToday">今日</span>
          <span @click="setWeek">本周</span>
          <span @click="setMonth">本月</span>
          <span @click="setYear">本年</span>
          <el-date-picker
            v-model="rdate"
            class="date"
            type="daterange"
            range-separator="-"
            start-placeholde="开始日期"
            end-placeholde="结束日期"
            value-format="yyyy-MM-dd"
            size="mini"
          >
          </el-date-picker>
        </div>
      </div>
      <div>
        <el-row :gutter="10">
          <el-col :span="19">
            <div ref="charts" class="Bcharts"></div>
          </el-col>
          <el-col :span="4">
            <div class="Bright">
              {{ title }}
              <ul>
                <li>
                  <span class="liIndex">1</span>
                  <span>饮料</span>
                  <span class="liValue">53</span>
                </li>
                <li>
                  <span class="liIndex">2</span>
                  <span>香烟</span>
                  <span class="liValue">43</span>
                </li>
                <li>
                  <span class="liIndex">3</span>
                  <span>零食</span>
                  <span class="liValue">41</span>
                </li>
                <li>
                  <span class="liIndex">4</span>
                  <span>生活用品</span>
                  <span class="liValue">28</span>
                </li>
                <li>
                  <span class="liIndex">5</span>
                  <span>学习用品</span>
                  <span class="liValue">27</span>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import dayjs from 'dayjs'
export default {
  data() {
    return {
      activeName: '销售额',
      mycharts: null,
      rdate: []
    }
  },
  computed: {
    title() {
      return '热卖排行'
    }
  },
  watch: {
    title() {
      this.mycharts.setOption({
        title: {
          text: this.title
        }
      })
    }
  },
  methods: {
    setToday() {
      const day = dayjs().format('YYYY-MM-DD')
      this.rdate = [day, day]
    },
    setWeek() {
      const start = dayjs().day(1).format('YYYY-MM-DD')
      const end = dayjs().day(7).format('YYYY-MM-DD')
      this.rdate = [start, end]
    },
    setMonth() {
      const start = dayjs().startOf('month').format('YYYY-MM-DD')
      const end = dayjs().endOf('month').format('YYYY-MM-DD')
      this.rdate = [start, end]
    },
    setYear() {
      const start = dayjs().startOf('year').format('YYYY-MM-DD')
      const end = dayjs().endOf('year').format('YYYY-MM-DD')
      this.rdate = [start, end]
    }
  },
  mounted() {
    this.mycharts = echarts.init(this.$refs.charts)
    this.mycharts.setOption({
      title: {
        text: '销售额'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    })
  }
}
</script>

<style scoped>
.el-card__header {
  border-bottom: none;
}
.clearfix {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.tab {
  width: 100%;
  border-bottom: none;
}
.right {
  position: absolute;
  right: 0px;
}
.right span {
  margin: 0 10px;
}
.date {
  width: 220px;
  margin: 0px 20px;
}
.Bcharts {
  width: 100%;
  height: 300px;
}
.Bright{
  padding: 0px;
}
ul{
  list-style: none;
  width: 100%;
  height: 300px;
}
ul li{
  height: 8%;
  margin: 35px 0px;
}
.liIndex{
  float: left;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  background-color: lightcoral;
  text-align: center;
  margin-right: 35px;
}
.liValue{
  float: right;
}
</style>
