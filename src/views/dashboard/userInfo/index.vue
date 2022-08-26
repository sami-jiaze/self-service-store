<template>
  <div class="info-container">
    <div class="info-part1">
      <div class="part1-left">
        <h3>个人资料详情</h3>
        <img :src="userForm1.headImg" alt="待上传" class="useimg">
        <ul>
          <li>名称: {{userForm1.name}}</li>
          <li>性别: {{userForm1.sex}}</li>
          <li>电话: {{userForm1.phone}}</li>
          <li>邮箱: {{userForm1.email}}</li>
        </ul>
        <!-- :disabled="btnChangeEnable" -->
        <el-button type="primary" style="margin-top:30px;" @click="userEditDialogFormVisible=true" v-if="show">编辑个人信息</el-button>
        <el-button type="primary" style="margin-top:30px;" @click="userDialogFormVisible=true" v-if="!show">添加个人信息</el-button>
      </div>
      <div class="part1-right">
        <h3>当前商店详情</h3>
        <img :src="shopForm1.pic" alt="" class="shopimg">
        <ul>
          <li>商店id: {{shopId}}</li>
          <li>商店名称: {{shopForm1.name}}</li>
          <li>商店位置: {{shopForm1.position}} </li>
          <li>商店创建时间:{{shopTime | dateFormat}}</li>
        </ul>
        <el-button type="primary" @click="addmyshop" style="margin-top:30px;">绑定商店信息</el-button>
      </div>
    </div>
    <hr>
    <div class="info-part2">
      <el-button style="margin-top:20px" type="primary" @click="getall">查看我的所有分店</el-button>
    </div>

    <el-dialog title="添加用户信息" :visible.sync="userDialogFormVisible">
      <el-form :model="userForm" :rules="rules" ref="userForm">
        <el-form-item label="电话" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="userForm.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="userForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="userForm.pwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="userForm.sex">
            <el-radio label="男" value="男"></el-radio>
            <el-radio label="女" value="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="userForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户头像" label-width="100px">
          <!-- upload无法使用v-model -->
          <el-upload action="" :on-change="userHandleelchange" :auto-upload="false" list-type="picture-card">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="userDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitUserForm('userForm')">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="编辑用户信息" :visible.sync="userEditDialogFormVisible">
      <el-form :model="temuserForm" :rules="rules" ref="temuserForm">
        <el-form-item label="电话)" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="temuserForm.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="temuserForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="temuserForm.pwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="temuserForm.sex">
            <el-radio label="男" value="男"></el-radio>
            <el-radio label="女" value="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="temuserForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户头像" label-width="100px">
          <el-upload action="" :on-change="edituserHandleelchange" :auto-upload="false" list-type="picture-card">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="userDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUserForm('temuserForm')">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="编辑商店信息" :visible.sync="shopDialogFormVisible">
      <el-form :model="tempShopForm">
        <el-form-item label="标识ID" :label-width="formLabelWidth">
          <el-input v-model="tempShopForm.userId" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="商店名称" :label-width="formLabelWidth">
          <el-input v-model="tempShopForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商店位置" :label-width="formLabelWidth">
          <el-input v-model="tempShopForm.position" autocomplete="off"></el-input>
        </el-form-item>
        <el-upload action="" :on-change="handleelchange" :auto-upload="false" list-type="picture-card">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="shopDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmshop">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="我的分店" :visible.sync="dialogVisible" width="60%">
      <el-table :data="allShopForm">
        <el-table-column property="id" label="分店id" width="180"></el-table-column>
        <el-table-column property="createTime" label="开店时间" width="180"></el-table-column>
        <el-table-column property="name" label="分店名称" width="100"></el-table-column>
        <el-table-column property="position" label="分店地址"></el-table-column>
        <el-table-column property="pic" label="分店图片" width="200">
          <template slot-scope="{row}">
            <img :src="row.pic" style="max-width:150px;height:100px">
          </template>
        </el-table-column>
        <el-table-column prop="prop" label="查看库存" width="width">
          <template slot-scope="{row}">
            <el-button type="warning" icon="el-icon-info" size="mini" @click="getGoodsStore(row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <el-drawer :visible.sync="drawer" :show-close="false" size="50%">
      <el-table :data="currentShopForm" border style="width: 100%;margin-top:20px">
        <el-table-column prop="id" label="商品id" width="180">
        </el-table-column>
        <el-table-column prop="name" label="商品名称" width="100">
        </el-table-column>
        <el-table-column prop="num" label="商品数量" width="100">
        </el-table-column>
        <el-table-column prop="price" label="商品价格" width="100">
        </el-table-column>
        <el-table-column prop="" label="商品图片" width="100">
            <template slot-scope="{row}">
              <img :src="row.pic" style="width:100px;height:100px" alt="未上传">
            </template>
        </el-table-column>
      </el-table>
    </el-drawer>

  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'userInfo',
  data() {
    return {
      show: this.$store.state.shop.userId,
      formLabelWidth: '40',
      // template用户个人信息
      userForm: {
        phone: '',
        name: '',
        pwd: '',
        sex: '',
        email: '',
        headImg: ''
      },
      temuserForm: {
        phone: '',
        name: '',
        pwd: '',
        sex: '',
        email: '',
        headImg: ''
      },
      userDialogFormVisible: false,
      userEditDialogFormVisible: false,
      tempShopForm: {
        userId: '',
        name: '',
        position: '',
        pic: ''
      },
      shopDialogFormVisible: false,
      rules: {
        name: [
          { required: true, message: '请输入您的姓名', trigger: 'blur' },
          { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入您的电话', trigger: 'blur' },
          { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        ]
      },
      dialogVisible: false,
      drawer: false
    }
  },
  methods: {
    addmyshop() {
      this.shopDialogFormVisible = true
    },
    confirmshop() {
      this.$store.dispatch('saveshop', this.tempShopForm)
      // this.partR = true
      this.shopDialogFormVisible = false
      // console.log(JSON.stringify(this.tempShopForm))
      this.$store.dispatch('addShop', JSON.stringify(this.tempShopForm))
      // this.btnChangeEnable = true
    },
    // 新增用户
    submitUserForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(JSON.stringify(this.userForm))
          this.$store.dispatch('addUser', JSON.stringify(this.userForm))
          this.userDialogFormVisible = false
        } else {
          alert('格式错误请检查')
          return false
        }
      })
    },
    // 编辑用户
    editUserForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(JSON.stringify(this.temuserForm))
          this.$store.dispatch('editUser', JSON.stringify(this.temuserForm))
          this.userEditDialogFormVisible = false
        } else {
          alert('格式错误请检查')
          return false
        }
      })
    },
    // 用户头像上传
    userHandleelchange(file) {
      const formData = new FormData()
      console.log(file)
      formData.append('image', file.raw)
      axios({
        url: 'http://43.138.43.158:2333/shop/upload/image',
        method: 'POST',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryVCFSAonTuDbVCoAN' }
      }).then(res => {
        if (res.data.code === 200) {
          console.log(res.data.result)
          this.userForm.headImg = res.data.result
        }
      })
    },
    edituserHandleelchange(file) {
      const formData = new FormData()
      console.log(file)
      formData.append('image', file.raw)
      axios({
        url: 'http://43.138.43.158:2333/shop/upload/image',
        method: 'POST',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryVCFSAonTuDbVCoAN' }
      }).then(res => {
        if (res.data.code === 200) {
          console.log(res.data.result)
          this.temuserForm.headImg = res.data.result
        }
      })
    },
    // 上传商店照片
    handleelchange(file) {
      const formData = new FormData()
      console.log(file)
      formData.append('image', file.raw)
      axios({
        url: 'http://43.138.43.158:2333/shop/upload/image',
        method: 'POST',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryVCFSAonTuDbVCoAN' }
      }).then(res => {
        if (res.data.code === 200) {
          console.log(res.data.result)
          this.tempShopForm.pic = res.data.result
        }
      })
    },
    // 获取所有分店
    getall() {
      this.$store.dispatch('getAllShop', this.$store.state.shop.userId)
      this.dialogVisible = true
    },
    // 获取当前商店仓库
    getGoodsStore(row) {
      this.$store.dispatch('getCurrentShop', row.id)
      this.drawer = true
    }
  },
  computed: {
    ...mapState({
      shopForm1: state => state.shop.shopForm || {},
      userForm1: state => state.shop.userForm1 || {},
      shopId: state => state.shop.shopId,
      shopTime: state => state.shop.shopTime
      // btnChangeEnable: state => state.shop.btnChangeEnable || false
    }),
    allShopForm() {
      return this.$store.state.shop.allShopForm || []
    },
    currentShopForm() {
      return this.$store.state.shop.currentShopForm || []
    }
  },
  mounted() {
    this.tempShopForm.userId = this.$store.state.shop.userId
  }
}
</script>

<style lang="less" scoped>
.info-container {
  .info-part1 {
    height: 300px;
    // background-color: pink;
    margin-top: 15px;
    .part1-left {
      position: relative;
      float: left;
      width: 50%;
      height: 100%;
      background-color: aliceblue;
      .useimg {
        position: absolute;
        top: 0;
        left: 10px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      li {
        margin-top: 20px;
      }
    }
    .part1-right {
      position: relative;
      float: right;
      width: 50%;
      height: 100%;
      background-color: azure;
      li {
        margin-top: 25px;
        margin-left: 300px;
        text-align: center;
      }
      .shopimg {
        position: absolute;
        top: 48px;
        left: 25px;
        width: 242px;
        height: 163px;
      }
    }
  }
}
</style>
