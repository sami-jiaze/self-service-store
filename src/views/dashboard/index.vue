<template>
  <div class="container">
    <el-container style="height: 100%;">
      <el-header>
        <div>
          <img src="@/assets/img/儿童机器人-01.svg" alt="" style="margin-left:20px">
          <span class="nav">无人售货商店</span>
        </div>
        <el-button @click="logout">退出登录</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <ul>
            <li>
              <router-link to="/dashboard/overview">总览</router-link>
            </li>
            <li>
              <router-link to="/dashboard/stock">商品总库存</router-link>
            </li>
            <li>
              <router-link to="/dashboard/supplier">进货(供应商)推荐</router-link>
            </li>
            <li>
              <router-link to="/dashboard/salesView">交易记录</router-link>
            </li>
            <li>
              <router-link to="/dashboard/categories">商品分类管理</router-link>
            </li>
            <li>
              <router-link to="/dashboard/userInfo">个人中心</router-link>
            </li>
          </ul>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    logout() {
      this.$router.push('/home')
      sessionStorage.clear()
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav {
    position: absolute;
    top: 13px;
    left: 90px;
    font-family: FEN;
    font-size: 22px;
    font-weight: 100;
    color: #fff;
  }
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 100px;
  a {
    text-decoration: none;
    color: #333;
    font-size: 18px;
  }
  a:hover {
    color: #fff;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>
