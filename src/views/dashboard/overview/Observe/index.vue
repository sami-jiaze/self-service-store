<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12">
        <Search></Search>
      </el-col>
      <el-col :span="12">
        <Cate></Cate>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Search from './search'
import Cate from './cate'
export default {
  name: '',
  components: {
    Search,
    Cate
  }
}
</script>

<style>

</style>
