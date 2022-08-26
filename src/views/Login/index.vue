<template>
  <div class="bg">
    <div>
      <vue-particles color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
      </vue-particles>
    </div>

    <div class="login-wrap">
      <el-form :model="loginForm" label-width="40px">
        <el-form-item class="login-item">
          <span class="svg-container">
            <img src="../../assets/img/user.svg" alt="">
          </span>
          <el-input v-model="loginForm.phone" placeholder="用户电话"></el-input>
        </el-form-item>
        <el-form-item class="login-item2 login-item">
          <span class="svg-container">
            <img src="../../assets/img/psw.svg" alt="">
          </span>
          <el-input v-model="loginForm.password" placeholder="请输入登录密码" type="password"></el-input>
        </el-form-item>
        <el-button  @click="login">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import qs from 'querystring'
export default {
  data() {
    return {
      loginForm: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('userLogin', qs.stringify(this.loginForm)) && this.$router.push('/dashboard')
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bg {
  background: url(../../assets/img/sky.jpg);
  background-size: 100% 100%;
}
.login-wrap {
  position: absolute;
  top: 29%;
  left: 35%;
  width: 500px;
  height: 287px;
  border-radius: 6px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  .login-item {
    margin-top: 65px;
    .el-input {
      width: 350px;
      margin-left: 15px;
      background-color: blue;
    }
    img {
      display: inline-block;
      width: 36px;
      height: 30px;
      vertical-align: middle;
    }
  }
  .login-item2 {
    margin-top: 5px;
  }
}
.el-button {
  width: 69%;
  margin-left: 93px;
  color: #fff;
  margin-top: 15px;
  background-color: #1b191976;
  border: none;
}
.el-button:hover {
  background-color: #1b191976;
}
// .login-item /deep/ .el-form-item__label {
//   font-size: 18px;
//   color: #fff;
// }
</style>
