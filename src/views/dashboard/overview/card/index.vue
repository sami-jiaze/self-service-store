<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <Detail title="总销售额" count="￥2510">
            <template slot="charts">
              <span>日同比 56.67%</span>
            </template>
            <template slot="footer">
              <span>日销售额 $213</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="各时段交易量" count="15">
            <template slot="charts">
              <lineCharts></lineCharts>
            </template>
            <template slot="footer">
              <span>平均交易量 8</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="交易笔数" count="25">
            <template slot="charts">
              <barChart></barChart>
            </template>
            <template slot="footer">
              <span>平均每笔 ￥21</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="预计营业额" count="$1250">
            <template slot="charts">
              <progressChart></progressChart>
            </template>
            <template slot="footer">
              <span>营业额 $913</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from './detail'
import lineCharts from './lineChart'
import barChart from './barChart'
import progressChart from './progressChart'
export default {
  name: '',
  components: {
    Detail,
    lineCharts,
    barChart,
    progressChart
  }
}
</script>

<style>
</style>
