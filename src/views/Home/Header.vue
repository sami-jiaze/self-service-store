<template>
  <div style="color:#fff">
    <el-row>
      <el-col :span="12" class="left" id="TheFirst">
        <img src="@/assets/img/儿童机器人-01.svg" alt="" style="margin-left:20px">
        <span class="nav">无人售货商店</span>
      </el-col>
      <el-col :span="12" class="right">
        <ul>
          <li v-for="(item,index) in list" :key="item.id" :class="[active===index?'actived':'def']" @mouseleave="active=''" @mouseover="active = index" @click="goto(index)">{{item.name}}</li>
        </ul>
      </el-col>
    </el-row>

    <div class="h-icon" @click="showVideo=true"></div>
    <div v-show="showVideo">
      <button @click="pause">×</button>
      <video controls ref="video">
        <source src="../../assets/v1.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: '',
      list: [
        { id: 1, name: '简介' },
        { id: 3, name: '业务模块' },
        { id: 4, name: '运营团队' },
        { id: 5, name: '加入我们' },
        { id: 6, name: '登录' }
      ],
      showVideo: false
    }
  },
  methods: {
    // 锚点
    goto(index) {
      console.log(index)
      if (index === 0) {
        document.querySelector('#main-introduction').scrollIntoView(true)
      }
      if (index === 1) {
        document.querySelector('#business').scrollIntoView(true)
      }
      if (index === 2) {
        document.querySelector('#our-team').scrollIntoView(true)
      }
      if (index === 3) {
        document.querySelector('#join-us').scrollIntoView(true)
      }
      if (index === 4) {
        this.$router.push('/login')
      }
    },
    // 关闭video
    pause() {
      this.$refs.video.pause()
      this.showVideo = false
    }
  }
}
</script>

<style lang="less" scoped>
.left {
  position: relative;
  .nav {
    position: absolute;
    top: 13px;
    left: 70px;
    font-family: FEN;
    font-size: 22px;
    font-weight: 100;
    color: #fff;
  }
}
.right {
  position: relative;
  ul {
    position: absolute;
    top: 20px;
    right: 45px;
  }
  li {
    display: inline;
    font-size: 17px;
    margin-left: 31px;
    color: #fff;
  }
  .actived {
    cursor: pointer;
    color: #1989fa;
  }
  .def:hover {
    cursor: pointer;
  }
}
.h-icon {
  position: absolute;
  top: 46%;
  left: 47%;
  background: url(../../assets/img/play.png) no-repeat;
  background-size: 100% 100%;
  width: 70px;
  height: 50px;
  cursor: pointer;
}
video {
  position: absolute;
  width: 70%;
  height: 70%;
  bottom: 10%;
  left: 20%;
}
button{
  position: absolute;
  top: 12%;
  right: 10%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
