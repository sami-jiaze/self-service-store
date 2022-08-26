<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <el-card>
      <div slot="header" class="header">
        <div class="search-header">
          <span>各个时间段营业额查询</span>
          <el-dropdown>
            <span>
              <i class="el-icon-more"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>早晨</el-dropdown-item>
              <el-dropdown-item>中午</el-dropdown-item>
              <el-dropdown-item>下午</el-dropdown-item>
              <el-dropdown-item>夜晚</el-dropdown-item>
              <el-dropdown-item>凌晨</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div>
        <el-row :gutter="10">
          <el-col :span="12">
            <LineCharts></LineCharts>
          </el-col>
          <el-col :span="12">
            <LineCharts></LineCharts>
          </el-col>
        </el-row>

        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column prop="date" label="时间段排名" width="180">
          </el-table-column>
          <el-table-column prop="name" label="出售物品关键字" width="180">
          </el-table-column>
          <el-table-column prop="num" label="交易笔数">
          </el-table-column>
        </el-table>

      </div>
    </el-card>
  </div>
</template>

<script>
import LineCharts from './LineCharts'
export default {
  name: '',
  data() {
    return {
      tableData: [
        {
          date: '下午',
          name: '生活用品',
          num: 26
        },
        {
          date: '中午',
          name: '零食',
          num: 16
        },
        {
          date: '凌晨',
          name: '香烟',
          num: 14
        }
      ]
    }
  },
  components: {
    LineCharts
  }
}
</script>

<style scoped>
.header {
  border-bottom: 1px solid #eee;
  padding: 5px 0;
}
.search-header {
  display: flex;
  justify-content: space-between;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
