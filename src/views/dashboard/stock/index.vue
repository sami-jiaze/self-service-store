<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <!-- eslint-disable vue/no-unused-vars -->
    <el-button type="primary" style="margin-bottom:20px" @click="addialogFormVisible=true">新增商品</el-button>
    <el-table style="width:100%" border :data="allList" v-if="shopId">
      <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="id" label="商品id" width="160"></el-table-column>
      <el-table-column prop="shopId" label="归属商店id" width=""></el-table-column>
      <el-table-column prop="type" label="归属分类id" width="180"></el-table-column>
      <el-table-column prop="name" label="商品名称" width=""></el-table-column>
       <el-table-column prop="price" label="商品价格" width=""></el-table-column>
      <el-table-column label="默认图片" width="110">
        <template slot-scope="{row, $index}">
          <img :src="row.pic" style="width:80px;height:80px" alt="未上传图片">
        </template>
      </el-table-column>
      <el-table-column prop="num" label="商品数量" width="80"></el-table-column>
      <el-table-column prop="preStock" label="进货通知" width="80"></el-table-column>
      <el-table-column label="操作" width="119">
        <template slot-scope="{row, $index}">
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit(row)"></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="del(row)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination style="margin-top:20px;text-align:center"
      :current-page="form.page"
      :page-size="form.limit"
      :page-sizes="[10]"
      layout="prev, pager, next, jumper,->, sizes, total"
      :total="this.$store.state.stock.total"
      @current-change="getAllgoods"
      @size-change="handleSizeChange">
    </el-pagination>

    <el-dialog title="编辑商品" :visible.sync="dialogFormVisible">
      <!-- 表单绑定一个对象 -->
      <el-form style="width:80%" :model="editForm">
        <el-form-item label="商店id" label-width="100px">
          <el-input v-model="editForm.shopId" autocomplete="off" />
        </el-form-item>
        <el-form-item label="商品id" label-width="100px">
          <el-input v-model="editForm.id" autocomplete="off" />
        </el-form-item>
        <el-form-item label="商品名称" label-width="100px">
          <el-input v-model="editForm.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="商品价格" label-width="100px">
          <el-input v-model="editForm.price" autocomplete="off" />
        </el-form-item>
        <el-form-item label="商品数量" label-width="100px">
          <el-input v-model="editForm.num" autocomplete="off" />
        </el-form-item>
        <el-form-item label="所属分类id" label-width="100px">
          <el-input v-model="editForm.type" autocomplete="off" />
        </el-form-item>
        <el-form-item label="进货通知" label-width="100px">
          <el-input v-model="editForm.preStock" autocomplete="off" />
        </el-form-item>
        <el-form-item label="商品图片" label-width="100px">
          <!-- upload无法使用v-model -->
          <el-upload action="" :on-change="handleelchange" :auto-upload="false" list-type="picture-card">
            <img v-if="editForm.pic" :src="editForm.pic" style="max-width:160px;height:10px">
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editGoods">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="新增商品" :visible.sync="addialogFormVisible">
      <!-- 表单绑定一个对象 -->
      <el-form style="width:80%" :model="addForm">
        <el-form-item label="商店id" label-width="100px">
          <el-input v-model="addForm.shopId" autocomplete="off" />
        </el-form-item>
        <el-form-item label="商品id" label-width="100px">
          <el-input v-model="addForm.id" autocomplete="off" />
        </el-form-item>
        <el-form-item label="商品名称" label-width="100px">
          <el-input v-model="addForm.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="商品价格" label-width="100px">
          <el-input v-model="addForm.price" autocomplete="off" />
        </el-form-item>
        <el-form-item label="商品数量" label-width="100px">
          <el-input v-model="addForm.num" autocomplete="off" />
        </el-form-item>
        <el-form-item label="所属分类id" label-width="100px">
          <el-input v-model="addForm.type" autocomplete="off" />
        </el-form-item>
        <el-form-item label="进货通知" label-width="100px">
          <el-input v-model="addForm.preStock" autocomplete="off" />
        </el-form-item>
        <el-form-item label="商品图片" label-width="100px">
          <!-- upload无法使用v-model -->
          <el-upload action="" :on-change="addhandleelchange" :auto-upload="false" list-type="picture-card">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addGoods">确 定</el-button>
      </div>
    </el-dialog>

    <p style="margin-top:10px">用户id:{{userId}}</p>
    <p>当前商店id:{{shopId}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // eslint-disable-next-line vue/name-property-casing
  name: 'Sku',
  data() {
    return {
      form: {
        page: 1,
        limit: 10
      },
      records: [], // 存储sku列表
      total: 0,
      dialogFormVisible: false,
      addialogFormVisible: false,
      editForm: {
        shopId: this.$store.state.shop.shopId,
        id: '',
        name: '',
        price: 0,
        num: '',
        type: '',
        preStock: 0,
        pic: ''
      },
      addForm: {
        shopId: this.$store.state.shop.shopId,
        id: '',
        name: '',
        price: '',
        num: 0,
        type: '',
        preStock: 0,
        pic: ''
      },
      shopId: '',
      userId: ''
    }
  },
  mounted() {
    this.getAllgoods()
    this.shopId = this.$store.state.shop.shopId
    this.userId = this.$store.state.shop.userId
  },
  methods: {
    async getAllgoods(pager = 1) {
      this.page = pager
      this.$store.dispatch('getAllGoods', this.form)
    },
    handleSizeChange(limit) {
      this.form.limit = limit
      console.log(this.form.limit)
      // this.getAllgoods()
    },
    edit(row) {
      this.dialogFormVisible = true
      this.editForm.id = row.id
      this.editForm.name = row.name
      this.editForm.type = row.type
      this.editForm.price = row.price
      this.editForm.pic = row.pic
      console.log(row)
    },
    del(row) {
      // console.log(row)
      this.$store.dispatch('delGood', row.id)
    },
    editGoods() {
      console.log(JSON.stringify(this.editForm))
      this.$store.dispatch('editGoods', JSON.stringify(this.editForm))
      this.dialogFormVisible = false
    },
    addGoods() {
      console.log(JSON.stringify(this.addForm))
      this.$store.dispatch('addGood', JSON.stringify(this.addForm))
      this.addialogFormVisible = false
    },
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
          this.editForm.pic = res.data.result
        }
      })
    },
    addhandleelchange(file) {
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
    }
  },
  computed: {
    allList() {
      return this.$store.state.stock.allList || []
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
</style>
<style scoped>
.el-row .el-col5 {
  font-size: 18px;
  text-align: right;
}
.el-col {
  margin: 10px 10px;
}
</style>
