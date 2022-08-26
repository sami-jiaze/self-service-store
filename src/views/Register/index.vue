<template>
  <div class="container act">
    <div class="box">
      <div class="register">
        <h3>注册新用户
          <span class="go">我有账号，去 <router-link to="./login">登录</router-link>
          </span>
        </h3>
        <div class="content">
          <label>您的昵称:</label>
          <input type="text" placeholder="请输入你的昵称" v-model="name">
        </div>
        <div class="content">
          <label>手机号:</label>
          <input type="text" placeholder="请输入你的手机号" v-model="phone">
        </div>
        <div class="content">
          <label>登录密码:</label>
          <input type="text" placeholder="请输入你的登录密码" v-model="password">
        </div>
        <div class="content">
          <label>确认密码:</label>
          <input type="text" placeholder="请输入确认密码" v-model="password1">
        </div>
        <div class="content">
          <label>输入验证码:</label>
          <input type="text" placeholder="请输入验证码" v-model="code">
          <button class="codeBtn" @click="getCode(phone)" :disabled="canGet">{{btnText}}</button>
          <div v-show="codeShow">
            <img :src="imgsrc" alt="请获取验证码" class="imgQrCode">
          </div>
        </div>
        <div class="btn">
          <button @click="UserRegister">完成注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'querystring'
export default {
  name: 'Register',
  data() {
    return {
      name: '',
      phone: 1,
      password: '',
      password1: '',
      code: '',
      codeShow: false,
      btnText: '获取验证码',
      canGet: false,
      time: 5000,
      imgsrc: ''
    }
  },
  methods: {
    async UserRegister() {
      try {
        const { phone, password, password1, code, name } = this
        if (password === password1 && code !== '' && phone !== '' && name !== '' && password !== '') {
          this.codeShow = false
          await this.$store.dispatch('userRegister', qs.stringify({ phone, password, code, name }))
          this.$router.push('/login')
        } else if (password !== password1) {
          alert('两次输入的密码不匹配')
        } else if (code === '') {
          alert('请输入验证码')
        } else if (phone === '') {
          alert('请输入电话')
        } else if (name === '') {
          alert('请输入昵称')
        } else if (password === '') {
          alert('请输入密码')
        }
      } catch (error) {
        alert(error.message)
      }
    },
    async getCode(phone) {
      if (phone === '') {
        alert('请输入手机号')
      } else {
        axios.get(`http://nick.cab/api/user/passport/sendCode/${phone}`, { responseType: 'blob' }).then(res => {
          this.codeShow = true
          this.imgsrc = window.URL.createObjectURL(res.data)
          console.log(res)
          if (this.canGet === false) {
            this.canGet = true
            this.btnText = '等待五秒后重试'
            setTimeout(() => {
              this.canGet = false
              this.btnText = '获取验证码'
            }, this.time)
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/act.css';
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  // background-image: linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%);
  // background: url(../../assets/img/register.jpg);
  .box {
    width: 600px;
    height: 600px;
    margin: 69px auto;
    // background-color: #fff;
    .register {
      h3 {
        color: #333;
        font-size: 20px;
        span {
          font-size: 14px;
          float: right;
          a {
            color: #e1251b;
          }
        }
      }
      div:nth-of-type(1) {
        margin-top: 80px;
      }
      .content {
        padding-left: 50px;
        margin-bottom: 28px;
        position: relative;
        .codeBtn {
          width: 87px;
          height: 38px;
          margin-left: 20px;
        }
        label {
          font-size: 14px;
          font-weight: 600;
          width: 96px;
          text-align: right;
          display: inline-block;
        }
        input {
          width: 270px;
          height: 38px;
          padding-left: 8px;
          margin-left: 18px;
          outline: none;
          border: 1px solid #999;
          background-color: #fffced;
        }
        img {
          width: 211px;
          height: 60px;
          margin-top: -45px;
          margin-left: 28%;
          vertical-align: sub;
        }
      }
      .btn {
        text-align: center;
        button {
          border: none;
          width: 270px;
          height: 36px;
          background-image: #f5e29a;
          color: #333;
          font-size: 16px;
          cursor: pointer;
          font-weight: 800;
        }
      }
    }
  }
}
</style>
