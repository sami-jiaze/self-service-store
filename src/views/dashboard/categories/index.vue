<template>
  <!-- eslint-disable vue/no-unused-vars -->
  <div>
    <el-button type="primary" @click="addclass">新增商品分类</el-button>
    <el-table :data="list" border style="width: 100%;margin-top:20px">
      <el-table-column prop="id" label="商品id" width="180">
      </el-table-column>
      <el-table-column prop="name" label="商品分类 " width="180">
      </el-table-column>
      <el-table-column prop="pic" label="图片">
        <template slot-scope="{ row ,$index}">
          <!-- row index是固定的这两个参数名不能随意更改 处理url显示不出图片 -->
          <img :src="row.pic" alt="" width="100px">
        </template>
      </el-table-column>
      <el-table-column prop="prop" label="操作" width="width">
        <template slot-scope="{ row ,$index}">
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="changeInfo(row)">编辑</el-button>
          <el-button type="info" icon="el-icon-info" size="mini" @click="getSkuInfo(row)">查看</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="del(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="添加分类" :visible.sync="dialogFormVisible">
      <!-- 表单绑定一个对象 -->
      <el-form ref="ruleForm" style="width:80%" :model="addForm" :rules="rules">
        <el-form-item label="分类id" label-width="100px">
          <el-input v-model="addForm.pid" autocomplete="off" />
        </el-form-item>
        <el-form-item label="分类名称" label-width="100px">
          <el-input v-model="addForm.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="分类LOGO" label-width="100px">
          <!-- upload无法使用v-model -->
          <el-upload action="" :on-change="handleelchange" :auto-upload="false" list-type="picture-card">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="uploadGoodclass">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="编辑分类" :visible.sync="EditdialogFormVisible">
      <!-- 表单绑定一个对象 -->
      <el-form ref="ruleForm" style="width:80%" :model="editForm" :rules="rules">
        <el-form-item label="分类id" label-width="100px">
          <el-input v-model="editForm.id" autocomplete="off" disabled />
        </el-form-item>
        <el-form-item label="所属id" label-width="100px">
          <el-input v-model="editForm.pid" autocomplete="off" />
        </el-form-item>
        <el-form-item label="分类名称" label-width="100px">
          <el-input v-model="editForm.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="分类LOGO" label-width="100px">
          <!-- upload无法使用v-model -->
          <el-upload action="" :on-change="EditHandleelchange" :auto-upload="false">
            <img v-if="editForm.pic" :src="editForm.pic" style="max-width:200px;max-height:200px;">
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editGoodclass">确 定</el-button>
      </div>
    </el-dialog>

    <el-drawer :visible.sync="drawer" :show-close="false" size="50%">
      <el-table :data="listChildren" border style="width: 100%;margin-top:20px">
        <el-table-column prop="id" label="商品分类id" width="180">
        </el-table-column>
        <el-table-column prop="name" label="商品分类 " width="100">
        </el-table-column>
        <el-table-column prop="pic" label="图片">
          <template slot-scope="{ row ,$index}">
            <!-- row index是固定的这两个参数名不能随意更改 处理url显示不出图片 -->
            <img :src="row.pic" alt="" width="100px">
          </template>
        </el-table-column>
        <el-table-column prop="prop" label="操作" width="300">
          <template slot-scope="{ row ,$index}">
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="changeInfo(row)">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="del(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-drawer>
  </div>
</template>

<script>
import { reqGetGoodsClass } from '@/api/index.js'
import axios from 'axios'
export default {
  name: 'categories',
  data() {
    return {
      list: [],
      listChildren: [],
      // 上传图片
      dialogFormVisible: false,
      EditdialogFormVisible: false,
      drawer: false,
      addForm: {
        name: '',
        pid: '',
        pic: ''
      },
      editForm: {
        id: '',
        name: '',
        pid: '',
        pic: ''
      },
      // 表单验证
      rules: {
        tmName: [
          // { required: true, message: '请输入品牌名称', trigger: 'blur' },
          // { min: 2, max: 10, message: '长度在2-10字符', trigger: 'change' }
        ]
        // logoUrl: [{ required: true, message: '请选择图片' }]
      }
    }
  },
  mounted() {
    this.getClass()
  },
  methods: {
    async getClass() {
      const res = await reqGetGoodsClass()
      if (res.code === 200) {
        console.log(res)
        this.list = res.result
      }
    },
    getSkuInfo(row) {
      console.log(row)
      this.drawer = true
      this.listChildren = row.children
    },
    changeInfo(row) {
      // console.log(row)
      this.editForm.id = row.id
      this.editForm.name = row.name
      this.editForm.pic = row.pic
      this.editForm.pid = row.pid
      this.EditdialogFormVisible = true
    },
    del(row) {
      // console.log(row.id)
      this.$store.dispatch('delGoodClass', row.id)
      this.getClass()
    },
    // 添加按钮
    addclass() {
      this.dialogFormVisible = true
    },
    uploadGoodclass() {
      // console.log(JSON.stringify(this.addForm))
      this.$store.dispatch('addGoodClass', JSON.stringify(this.addForm))
      this.dialogFormVisible = false
    },
    editGoodclass() {
      this.$store.dispatch('editGoodClass', JSON.stringify(this.editForm))
      this.EditdialogFormVisible = false
    },
    // 上传分类图片
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
          this.addForm.pic = res.data.result
        }
      })
    },
    // 编辑商品上传图片
    EditHandleelchange(file) {
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
          this.editForm.pic = res.data.result
        }
      })
    }
  },
  computed: {
    goodClassForm() {
      return this.$store.state.goodClassForm
    }
    // ...mapState({
    //   goodClassForm: state => state.goodClassForm || []
    // })
  }
}
</script>

<style lang="less" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>>
