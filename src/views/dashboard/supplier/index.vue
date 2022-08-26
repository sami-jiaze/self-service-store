<template>
  <div>
    <h3>供应商选择</h3>
    <el-button type="primary" style="margin-top:20px" size="mini" @click="change">换一批</el-button>

    <el-table style="width:100%;margin-top:30px" border :data="supplierList">
      <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
      <el-table-column prop="name" label="供应商名称" width="160"></el-table-column>
      <el-table-column prop="tel" label="供应商电话" width="160"></el-table-column>
      <el-table-column prop="description" label="供应商描述" width=""></el-table-column>
      <el-table-column prop="" label="" width="">
        <template slot-scope="{row}">
          <img :src="row.pic" style="width:200px;height:100px" alt="未上传">
        </template>
      </el-table-column>
      <el-table-column label="操作" width="">
        <template slot-scope="{row}">
          <el-button type="info" icon="el-icon-info" size="mini" @click="supplierGoods(row)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <p style="margin-top:10px">用户id:{{userId}}</p>
    <p>当前商店id:{{shopId}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopId: '',
      userId: ''
    }
  },
  methods: {
    change() {
      alert('待完善...')
    },
    supplierGoods(row) {
      console.log(row)
      this.$store.dispatch('getSupplierGoodsList', row.shopId)
      alert('天啊接口居然没有商品')
    }
  },
  mounted() {
    this.shopId = this.$store.state.shop.shopId
    this.userId = this.$store.state.shop.userId
    this.$store.dispatch('getSupplier')
  },
  computed: {
    supplierList() {
      return this.$store.state.supplier.supplierList
    },
    supplierGoodsList() {
      return this.$store.state.supplier.supplierGoodsList
    }
  }
}
</script>

<style lang="less" scoped>
</style>
