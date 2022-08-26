<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    商店id:{{shopId}}
    <Card></Card>
    <Sale></Sale>
    <Observe></Observe>
  </div>
</template>

<script>
import Card from './card'
import Sale from './Sale'
import Observe from './Observe'
export default {
  name: '',
  data() {
    return {
      shopId: '',
      userId: ''
    }
  },
  mounted() {
    this.shopId = this.$store.state.shop.shopId
    this.userId = this.$store.state.shop.userId
    this.$store.dispatch('getBestGoods')
  },
  components: {
    Card,
    Sale,
    Observe
  }

}
</script>

<style scoped>

</style>
