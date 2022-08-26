<template>
  <!-- eslint-disable vue/no-unused-vars -->
  <div>
    <el-upload class="upload-demo" action="http://182.61.29.241:5000/photo" :on-preview="handlePreview" :file-list="fileList" :on-success="handleSuccess" list-type="picture">
      <el-button size="small" type="primary">上传图片</el-button>
      <div slot="tip" class="el-upload__tip">自助收银机拍摄的商品图片(出库/售出)</div>
    </el-upload>
    <hr>
    <el-upload class="upload-demo" action="http://182.61.29.241:5000/photo" :on-preview="inhandlePreview" :file-list="fileListin" :on-success="inhandleSuccess" list-type="picture">
      <el-button size="small" type="primary" style="margin-top:20px">入库</el-button>
      <div slot="tip" class="el-upload__tip">入库校验</div>
    </el-upload>
    <hr>
    <el-dialog title="出库识别情况为" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <img :src="tempurl" alt="" id="uploadimg">
      <ul>
        <li v-for="item in this.outstockList.outDetailList" :key="item.uid">
          售出商品名称：{{item.name}}<br>
          售出商品数量: {{item.num}}<br>
          商品单价:{{item.price}}
        </li>
      </ul>
      <span slot="footer" class="dialog-footer">
        <el-button @click="innerVisible = true" type="warning">勘 误</el-button>
        <el-button type="primary" @click="outStock">确 定</el-button>
      </span>
      <el-dialog width="30%" title="修正订单信息" :visible.sync="innerVisible" append-to-body>
        <ul>
          <li v-for="item in this.outstockList.outDetailList" :key="item.uid">
            商品名称: <el-input v-model="item.name" autocomplete="off"></el-input>
            商品数量: <el-input v-model="item.num" autocomplete="off"></el-input>
            商品单价: <el-input v-model="item.price" autocomplete="off"></el-input>
          </li>
        </ul>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="innerVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-dialog>

    <el-dialog title="入库识别情况为" :visible.sync="indialogVisible" width="30%" :before-close="handleClose">
      <img :src="intempurl" alt="" id="uploadimg">
      <ul>
        <li v-for="item in instockList.intoDetailList" :key="item.uid">
          售出商品名称：{{item.name}}<br>
          售出商品数量: {{item.num}}<br>
          商品单价:{{item.price}}
        </li>
      </ul>
      <el-input v-model="instockList.supplier" autocomplete="off" placeholder="供应商备注" style="margin-top:20px" />
      <el-input v-model="instockList.comment" autocomplete="off" placeholder="入库备注" style="margin-top:20px" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="innerinVisible = true" type="warning">勘 误</el-button>
        <el-button type="primary" @click="inStock">确 定</el-button>
      </span>
      <el-dialog width="30%" title="修正订单信息" :visible.sync="innerinVisible" append-to-body>
        <ul>
          <li v-for="item in instockList.intoDetailList" :key="item.uid">
            商品名称: <el-input v-model="item.name" autocomplete="off"></el-input>
            商品数量: <el-input v-model="item.num" autocomplete="off"></el-input>
            商品单价: <el-input v-model="item.price" autocomplete="off"></el-input>
          </li>
        </ul>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="innerinVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-dialog>

    <h3 style="margin-top:30px">入库记录</h3>
    <el-table style="width:100%;margin-top:30px" border :data="inStockList">
      <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
      <el-table-column prop="id" label="入库Id" width="180"></el-table-column>
      <el-table-column prop="shopId" label="商店Id" width="180"></el-table-column>
      <el-table-column prop="supplier" label="供应商" width="120"></el-table-column>
      <el-table-column prop="createTime" label="入库时间" width=""></el-table-column>
      <el-table-column prop="comment" label="入库备注" width=""></el-table-column>
      <el-table-column label="操作" width="">
        <template slot-scope="{row, $index}">
          <el-button type="info" icon="el-icon-info" size="mini" @click="intoStockInfo(row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer :visible.sync="drawer" :show-close="false" size="50%">
      <el-table :data="instockDetailList" border style="width: 100%;margin-top:20px">
        <el-table-column prop="goodId" label="商品id" width="180">
        </el-table-column>
        <el-table-column prop="createTime" label="入库时间" width="180">
        </el-table-column>
        <el-table-column prop="name" label="商品名称" width="100">
        </el-table-column>
        <el-table-column prop="num" label="商品数量" width="100">
        </el-table-column>
        <el-table-column prop="price" label="商品价格" width="100">
        </el-table-column>
      </el-table>
    </el-drawer>

    <el-pagination style="margin-top:20px;text-align:center" :current-page="page" :page-size="limit" :page-sizes="[3,5,10]" layout="prev, pager, next, jumper,->, sizes, total" :total="total" @current-change="getSkuList" @size-change="handleSizeChange">
    </el-pagination>

    <h3 style="margin-top:30px">出库记录</h3>
    <el-table style="width:100%;margin-top:30px" border :data="outStockList">
      <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
      <el-table-column prop="no" label="出库Id" width="180"></el-table-column>
      <el-table-column prop="shopId" label="商店Id" width="180"></el-table-column>
      <el-table-column prop="updateTime" label="出库时间" width=""></el-table-column>
      <el-table-column label="操作" width="">
        <template slot-scope="{row, $index}">
          <el-button type="info" icon="el-icon-info" size="mini" @click="outStockInfo(row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer :visible.sync="outdrawer" :show-close="false" size="50%">
      <el-table :data="outstockDetailList" border style="width: 100%;margin-top:20px">
        <el-table-column prop="goodId" label="商品id" width="180">
        </el-table-column>
        <el-table-column prop="name" label="商品名称" width="100">
        </el-table-column>
        <el-table-column prop="num" label="商品数量" width="100">
        </el-table-column>
        <el-table-column prop="price" label="商品价格" width="100">
        </el-table-column>
      </el-table>
    </el-drawer>

    <el-pagination style="margin-top:20px;text-align:center" :current-page="page" :page-size="limit" :page-sizes="[3,5,10]" layout="prev, pager, next, jumper,->, sizes, total" :total="total" @current-change="getSkuList" @size-change="handleSizeChange">
    </el-pagination>

    <p>当前商店id:{{shopId}}</p>
    <p>用户id:{{userId}}</p>
  </div>
</template>

<script>
export default {
  name: 'salesView',
  data() {
    return {
      fileList: [], // 出库
      fileListin: [], // 入库
      records: [], // 出库记录
      inrecords: [], // 入库记录
      tempurl: '', // 出库
      intempurl: '', // 入库
      dialogVisible: false, // 出库
      indialogVisible: false, // 入库
      // 内层对话框
      innerVisible: false, // 出
      innerinVisible: false, // 入
      formLabelWidth: 40,

      // 出库
      page: 1,
      limit: 10,
      total: 0,
      outstockList: {
        shopId: this.$store.state.shop.shopId,
        outDetailList: []
      },
      instockList: {
        shopId: this.$store.state.shop.shopId,
        supplier: '',
        comment: '',
        intoDetailList: []
      }, // 存储入库数据
      instockDetailList: [], // 存储入库详细数据
      outstockDetailList: [], // 存储出库详细数据
      drawer: false,
      outdrawer: false,
      shopId: '',
      userId: ''
    }
  },
  methods: {
    // 出库预览
    handlePreview(file) {
      console.log(file)
      this.tempurl = file.url
      this.dialogVisible = true
    },
    // 入库预览
    inhandlePreview(file) {
      console.log(file)
      this.intempurl = file.url
      this.indialogVisible = true
    },
    // 出库上传
    handleSuccess(res) {
      console.log(res.data)
      this.outstockList.outDetailList = res.data
    },
    // 入库上传
    inhandleSuccess(res) {
      console.log(JSON.stringify(res.data))
      this.instockList.intoDetailList = res.data
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    // 出库
    outStock() {
      this.dialogVisible = false
      console.log(this.outstockList.outDetailList)
      this.$store.dispatch('getOutStock', JSON.stringify(this.outstockList))
    },
    // 入库
    inStock() {
      this.indialogVisible = false
      console.log(this.instockList)
      this.$store.dispatch('goodInStock', JSON.stringify(this.instockList))
    },
    async getSkuList(pages = 1) {
    //   // this.page = pages
    //   // const { page, limit } = this
    //   // const res = await this.$api.sku.reqSkuList(page, limit)
    //   // if (res.code === 200) {
    //   //   this.total = res.data.total
    //   //   this.records = res.data.records
    //   // }
    },
    handleSizeChange(limit) {
      // this.limit = limit
      // this.getSkuList()
    },
    intoStockInfo(row) {
      this.instockDetailList = row.intoDetailList
      this.drawer = true
      // console.log(this.instockDetailList)
    },
    outStockInfo(row) {
      this.outstockDetailList = row.voList
      this.outdrawer = true
    }
  },
  computed: {
    inStockList() {
      return this.$store.state.stock.inStockList
    },
    outStockList() {
      return this.$store.state.stock.outStockList
    }
  },
  mounted() {
    this.shopId = this.$store.state.shop.shopId
    this.userId = this.$store.state.shop.userId
    this.$store.dispatch('getInStock', this.$store.state.shop.shopId)
    this.$store.dispatch('getOutStockList', this.$store.state.shop.shopId)
  }
}
</script>

<style lang="less" scoped>
#uploadimg {
  width: 200px;
  height: 200px;
  background-size: 100% 100%;
}
</style>
