<template>
  <el-carousel :interval="3000" type="card" height="30vw" indicator-position="none" arrow="none">
    <el-carousel-item v-for="item in imgList" :key="item.id">
      <img :src="item.imgsrc" style="width:100%;height: auto;">
      <p>{{item.text}}</p>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      imgList: [
        {
          id: 1,
          imgsrc: require('../assets/img/goods1.png'),
          text: '水果基地直采————实惠、安全、好吃'
        },
        {
          id: 2,
          imgsrc: require('../assets/img/goods2.png'),
          text: '零食饮品————新鲜美味、品质保证'
        },
        {
          id: 3,
          imgsrc: require('../assets/img/goods3.png'),
          text: '网红商品————洞悉市场前沿'
        },
        {
          id: 4,
          imgsrc: require('../assets/img/goods4.jpg'),
          text: '品牌鲜食————地方特色开盖即吃'
        },
        {
          id: 5,
          imgsrc: require('../assets/img/goods5.jpg'),
          text: '日常用品————品质升级、健康放心'
        }
      ],
      currentImgId: 1
    }
  },
  methods: {
    changeId() {
      if (this.currentImgId >= 5) {
        this.currentImgId = 1
      } else {
        this.currentImgId++
      }
    }
  }
}
</script>
<style lang="less">
.el-carousel {
  position: relative;
  padding-top: 40px;
  p {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: rgba(225, 106, 19, 0.9);
    color: #fff;
    text-align: center;
    line-height: 100px;
    font-size: 24px;
    opacity: 0;
  }
  .el-carousel__item:hover p{
    opacity: 1;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
