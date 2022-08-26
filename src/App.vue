<template>
  <div>
    <router-view v-wechat-title='$route.meta.title'></router-view>
  </div>
</template>

<script>
export default {
  // created() {
  //   // eslint-disable-next-line no-unused-expressions
  //   sessionStorage.getItem('shopTime')
  //     ? this.$store.dispatch('selectData/resetDataList', JSON.parse(sessionStorage.getItem('dataList'))) : {}
  // }
}
</script>
<style lang="less">
</style>
