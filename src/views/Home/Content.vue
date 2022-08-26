<template>
  <!-- eslint-disable vue/no-unused-vars -->
  <div class="content">
    <div id="main-introduction">
      <p class="intitle">
        AI数字化<span>零售解决方</span>案提供商
      </p>
      <hr>
      <p class="intitle-sub0">利用机器自动化结合算法替代人工的24小时机器人便利店。</p>
      <p class="intitle-sub">这里无需服务员,所有食品、取货、结算、库存盘点均由机器自动完成通过技术手段进行智能化自动化处理。</p>
      <p class="intitle-sub">我们探索未来零售与餐饮的商业空间，重构人与商品的连接场景。</p>
    </div>
    <div class="sub-introduction">
      <h2>为什么选择无人售货商店</h2>
      <ul>
        <li v-for="(item,index) in subList" :key="item.id">
          <div class="li-img">
            <img :src="require(`../../assets/img/sub${index}.png`)" alt="">
          </div>
          <div class="li-left">
            <h3>{{item.ht}}</h3>
            <p>{{item.p1}}</p>
            <p>{{item.p2}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div id="business">
      <p class="subtit">Strategy</p>
      <p class="tit">运营商品</p>
      <Carousel></Carousel>
    </div>
    <div id="our-team">
      <div class="team1">
        <p>关于我们 &nbsp; Our Team</p>
        <ul>
          <li v-for="(item,index) in memberList" :key="item.id">
            <img :src="item.memberSrc" style="width:100%;height:auto;">
            <p>{{item.pos}}</p>
            <p class="sig">{{item.signature}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div id="join-us">
      <div class="jointit">
        <p class="en-tit">PARTICIPATION STRATEGY</p>
        <p class="join-tit">加盟策略</p>
        <p class="join-sub">一起感受数智化技术带来的工作、服务方式转变</p>
      </div>
      <div class="joinbox">
        <ul class="joinu">
          <li class="jl1">
            <div class="jl1-content">
              <h2>加盟商</h2>
              <p>专注于店铺的经营与销售</p>
            </div>
          </li>
          <li class="jl2">
            <div class="jl2-rotate">
              <p class="jl2-p1"><span class="jl2-p1-span1">共同的事业</span></p>
              <p class="jl2-p2"><span class="jl2-p2-span2">毛利零分成</span></p>
            </div>
            <div class="jl2-content">
              <h2>加盟合同</h2>
              <p>平等的合作关系</p>
              <p>明确的权责分担</p>
            </div>
          </li>
          <li class="jl3">
            <div class="jl3-content">
              <h2>供应商</h2>
              <p>为店铺经营提供有力支持</p>
            </div>
          </li>
        </ul>
      </div>
      <a class="joinbtn">
        <span @click="joinus">加入我们</span>
        <i class="joinbtn-i"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subList: [
        { id: 1, ht: '减少排队时间', p1: '无需在柜台排队结账', p2: '放入自助收银机识别结账' },
        { id: 2, ht: '减少交流矛盾', p1: '不用在担心因为收银员收款', p2: '速度问题而发生口角' },
        { id: 3, ht: '降低开店成本', p1: '减少店员人力成本', p2: '扩张不受制于人员限制' },
        { id: 4, ht: '提升运营效率', p1: '提供核查功能', p2: '实时跟踪库存货量' }
      ],
      memberList: [
        { id: 1, memberSrc: require('../../assets/img/member1.jpg'), pos: '前端', signature: '前端要努力' },
        { id: 2, memberSrc: require('../../assets/img/member2.jpg'), pos: 'Python', signature: '炼丹要努力' },
        { id: 3, memberSrc: require('../../assets/img/member3.jpg'), pos: '后端', signature: '' },
        { id: 4, memberSrc: require('../../assets/img/member4.jpg'), pos: '后端', signature: 'ddl要努力' }
      ]
    }
  },
  methods: {
    joinus() {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="less" scoped>
@keyframes rotate360 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.content {
  position: relative;
  #main-introduction {
    position: relative;
    background-color: #fff;
    height: 450px;
    .intitle {
      position: absolute;
      top: 12%;
      left: 35%;
      text-align: center;
      font-size: 36px;
      color: #333;
      span {
        border-bottom: 3px solid #5da8ec;
      }
    }
    .intitle-sub0 {
      margin-top: 200px;
      text-align: center;
    }
    .intitle-sub {
      margin-top: 20px;
      text-align: center;
    }
    hr {
      // width: 252px;
      // margin-left: 42%;
      // margin-top: 15px;
      // border-color: #5da8ec;
    }
  }
  .sub-introduction {
    position: relative;
    height: 500px;
    background: url(../../assets/img/bgc02.jpg) no-repeat;
    background-size: 100% 100%;
    h2 {
      position: absolute;
      top: 12%;
      left: 17%;
      color: #fff;
      font-size: 36px;
    }
    ul {
      width: 850px;
      li {
        float: left;
        width: 257px;
        height: 2px;
        color: #fff;
        margin-top: 20%;
        margin-left: 13%;
      }
      .li-left {
        float: right;
        margin-top: -120px;
        margin-right: -110px;
        p {
          width: 200px;
        }
      }
    }
  }
  #business {
    height: 700px;
    background-color: #fff;
    .subtit {
      padding-top: 2.2rem;
      line-height: 0.8;
      font-family: 'Arial';
      font-weight: bold;
      font-size: 3.8rem;
      color: #eaeaea;
      text-align: center;
    }
    .tit {
      font-weight: bold;
      font-size: 2.4rem;
      margin-top: -1rem;
      text-align: center;
    }
  }
  #our-team {
    height: 500px;
    background: url('../../assets/img/bg3.jpg');
    background-size: 100% 100%;
    .team1 {
      width: 100%;
      height: 600px;
      background: rgba(34, 34, 34, 0.7);
      p {
        color: #fff;
        text-align: center;
        padding-top: 25px;
        font-size: 26px;
      }
      ul {
        display: flex;
        justify-content: space-around;
        li {
          margin-top: 130px;
          width: 100px;
          height: 100px;
          img {
            border-radius: 50%;
          }
          .sig{
            font-size: 15px;
          }
        }
      }
    }
  }
  #join-us {
    position: relative;
    height: 1000px;
    // background-color: powderblue;
    background-color: #fff;
    .jointit {
      height: 60px;
      line-height: 60px;
      text-align: center;
      .join-tit {
        font-weight: bold;
        font-size: 2.4rem;
        margin-top: -1.25rem;
      }
      .en-tit {
        padding-top: 4.2rem;
        line-height: 0.8;
        font-family: 'Arial';
        font-weight: bold;
        font-size: 3.8rem;
        color: #eaeaea;
      }
      .join-sub {
        font-size: 14px;
        color: #666666;
      }
    }
    .joinbox {
      position: relative;
      padding-top: 17.2rem;
      padding-left: 5.5rem;
      // margin-left: 45px;
      .joinu {
        position: relative;
        z-index: 5;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        .jl1 {
          position: relative;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          color: #fff;
          background-color: #aea38c;
          text-align: center;
          .jl1-content {
            position: absolute;
            top: 39%;
            left: 13%;
          }
        }
        .jl2 {
          position: relative;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          color: #fff;
          background: #e16a13;
          text-align: center;
          .jl2-rotate {
            position: absolute;
            left: 35%;
            top: -22%;
            width: 101px;
            height: 438px;
            color: #333;
            font-size: 20px;
            animation: rotate360 20s linear infinite;
            .jl2-p2-span2 {
              position: absolute;
              width: 108px;
              bottom: 0;
              left: -4%;
              transform: rotate(180deg);
            }
            .jl2-p2-span2::before {
              content: '';
              position: absolute;
              bottom: -24px;
              left: 50%;
              margin-left: -7px;
              width: 14px;
              height: 14px;
              border-radius: 50%;
              background: #e16a13;
            }
            .jl2-p1-span1::before {
              content: '';
              position: absolute;
              top: 33px;
              left: 50%;
              margin-left: -7px;
              width: 14px;
              height: 14px;
              border-radius: 50%;
              background: #e16a13;
            }
          }
          .jl2-content {
            position: absolute;
            top: 39%;
            left: 33%;
          }
        }
        .jl3 {
          position: relative;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          color: #fff;
          background-color: #aea38c;
          text-align: center;
          margin-right: 83px;
          .jl3-content {
            position: absolute;
            top: 39%;
            left: 16%;
          }
        }
      }
    }
    .joinbox::after {
      content: '';
      position: absolute;
      top: 75%;
      left: 190px;
      width: 70%;
      border-top: 2px solid #e16a13;
    }
    .joinbox::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -108px 0 0 -253px;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: #fcf0e7;
    }
    .joinbtn {
      position: absolute;
      bottom: 10%;
      left: 45%;
      width: 180px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 24px;
      color: #e16a13;
      border: 1px solid #e16a13;
      border-radius: 30px;
      cursor: pointer;
      .joinbtn-i {
        display: inline-block;
        margin-left: 10px;
        width: 19px;
        height: 19px;
        background: url(../../assets/img/i.png) no-repeat center;
        background-size: 100% 100%;
      }
    }
    .joinbtn:hover {
      color: #fff;
      background-color: #e16a13;
    }
    .joinbtn:hover .joinbtn-i {
      background: url(../../assets/img/i1.png) no-repeat center;
      background-size: 100% 100%;
    }
  }
}
</style>
