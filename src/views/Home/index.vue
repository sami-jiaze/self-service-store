<template>
  <div>
    <div class="container">
      <div class="ext">
        <Header></Header>
        <div class="text">
          <h1>24小时无人自助便利店</h1>
          <h4>24-HOUR SELF-SERVICE CONVENIENCE STORE</h4>
        </div>
      </div>
      <Content></Content>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'
export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {
    Header,
    Footer,
    Content
  }
}
</script>

<style lang="less" scoped>
.container {
  .ext {
    height: 670px;
    .text {
      color: #fff;
      text-align: center;
      margin-top: 115px;
      h1{
        font-size: 46px;
        font-weight: 700;
      }
      H4{
        font-weight: 400;
      }
    }
  }
  .ext::before{
    content: ' ';
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(../../assets/img/home1.jpg) no-repeat;
    background-size: cover;
  }
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
}
</style>
