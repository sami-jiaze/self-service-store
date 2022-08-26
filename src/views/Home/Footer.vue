<template>
  <div class="footer-container">
    <div class="box">
      <div class="footer-start">
        <img src="@/assets/img/儿童机器人-01.svg" alt="" style="margin-left:20px">
        <span class="nav">无人售货商店</span>
        <div class="fs-right">
          <span>
            <img src="@/assets/img/f1.png">
          </span>
          <span>
            <img src="@/assets/img/f2.png">
          </span>
          <span>
            <img src="@/assets/img/f3.png">
          </span>
          <span>
            <img src="@/assets/img/f4.png">
          </span>
        </div>
      </div>
      <div class="footer-main">
        <ul>
          <li class="fu-tit">关于我们</li>
          <li>企业介绍</li>
          <li>品质与服务</li>
          <li>企业文化</li>
        </ul>
        <ul>
          <li class="fu-tit">智慧零售</li>
          <li>顾客服务</li>
          <li>商户服务</li>
          <li>技术支持</li>
        </ul>
        <ul>
          <li class="fu-tit">最新资讯</li>
          <li>行业新闻</li>
          <li>媒体报道</li>
          <li>公司新闻</li>
        </ul>
        <ul>
          <li class="fu-tit">合作交流</li>
          <li>商品合作</li>
          <li>加盟咨询</li>
          <li>其他合作</li>
        </ul>
      </div>
      <div class="footer-end">
        福州大学(旗山校区) | 闽公网安备1958195819581958号
        <span @click="gotop">返回顶部↑</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    gotop() {
      document.querySelector('#TheFirst').scrollIntoView(true)
    }
  }
}
</script>

<style lang="less" scoped>
.footer-container {
  height: 400px;
  background-color: #272625;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 1450px;
    height: 350px;
    // background-color: aqua;
    .footer-start {
      padding-bottom: 10px;
      border-bottom: 1px solid #686867;
      display: flex;
      align-items: center;
      font-family: fen;
      font-size: 25px;
      .fs-right {
        margin-left: 70%;
      }
      .fs-right span img {
        width: 30px;
        height: 30px;
        margin-left: 20px;
      }
    }
    .footer-main {
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        color: #818080;
        margin-top: 25px;
      }
      .fu-tit {
        margin-top: 0px;
        font-size: 22px;
        color: #fff;
      }
    }
  }
  .footer-end {
    margin-top: 30px;
    text-align: left;
    color: #818080;
    span {
      cursor: pointer;
      float: right;
    }
    span:hover{
      color: #fff;
    }
  }
}
</style>
