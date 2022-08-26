import requests from './request'

// 新增用户
export function reqAddUser(data) {
  return requests({
    method: 'post',
    url: 'http://43.138.43.158:2333/shop/user/add',
    headers: { 'Content-Type': 'application/json' },
    data
  })
}
// 编辑用户
export function reqEditUser(data) {
  return requests({
    method: 'put',
    url: 'http://43.138.43.158:2333/shop/user/edit',
    headers: { 'Content-Type': 'application/json' },
    data
  })
}
// 注册接口
export function reqUserRegister(data) {
  return requests({
    method: 'post',
    url: `http://106.52.167.146:8001/api/user/passport/register?${data}`
  })
}
// 登录接口
export function reqUserLogin(data) {
  return requests({
    method: 'post',
    url: `http://106.52.167.146:8001/api/user/passport/login?${data}`
  })
}
// 获取验证码
export function reqRegCode(phone) {
  return requests({
    method: 'get',
    responseType: 'blob',
    url: `http://nick.cab/api/user/passport/sendCode/${phone}`
  })
}
// 新增商店
export function reqAddShop(data) {
  return requests({
    method: 'post',
    url: 'http://43.138.43.158:2333/shop/shop/add',
    headers: { 'Content-Type': 'application/json' },
    data
  })
}
// 获取全部商店
export function reqGetAllShop(shopId) {
  return requests({
    method: 'get',
    url: `http://43.138.43.158:2333/shop/shop/list?userId=${shopId}`,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}
// 获取商品分类
export function reqGetGoodsClass() {
  return requests({
    method: 'get',
    url: 'http://43.138.43.158:2333/shop/types/list'
  })
}
// 新增商品分类
export function reqAddGoodsClass(data) {
  return requests({
    method: 'post',
    url: 'http://43.138.43.158:2333/shop/types/add',
    headers: { 'Content-Type': 'application/json' },
    data
  })
}
// 删除商品分类
export function reqDelGoodsClass(data) {
  return requests({
    method: 'delete',
    url: 'http://43.138.43.158:2333/shop/types/delete',
    headers: { 'Content-Type': 'multipart/form-data' },
    params: {
      id: data
    }
  })
}
// 编辑商品分类
export function reqEditGoodsClass(data) {
  return requests({
    method: 'put',
    url: 'http://43.138.43.158:2333/shop/types/edit',
    headers: { 'Content-Type': 'application/json' },
    data
  })
}
// 获取所有商品库存
export function reqGetAllGoods(no, num) {
  return requests({
    method: 'get',
    url: `http://43.138.43.158:2333/shop/good/list?pageNo=${no}&pageSize=${num}`,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}
// 获取当前商店库存
export function reqGetCurrent(shopid) {
  return requests({
    method: 'get',
    url: `http://43.138.43.158:2333/shop/shop/queryStock?id=${shopid}`,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
}
// 编辑商品
export function reqEditGoods(data) {
  return requests({
    method: 'put',
    url: 'http://43.138.43.158:2333/shop/good/edit',
    headers: { 'Content-Type': 'application/json' },
    data
  })
}
// 新增商品
export function reqAddGoods(data) {
  return requests({
    method: 'post',
    url: 'http://43.138.43.158:2333/shop/good/add',
    headers: { 'Content-Type': 'application/json' },
    data
  })
}
// 删除商品
export function reqDelGoods(id) {
  return requests({
    method: 'delete',
    url: `http://43.138.43.158:2333/shop/good/delete?id=${id}`,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}
// 入库新增
export function reqInStock(data) {
  return requests({
    method: 'post',
    url: 'http://43.138.43.158:2333/shop/into/add',
    headers: { 'Content-Type': 'application/json' },
    data
  })
}
// 入库新增查询
export function reqGetInStock(shopId) {
  return requests({
    method: 'get',
    url: `http://43.138.43.158:2333/shop/into/list/?pageNo=1&pageSize=10&shopId=${shopId}`
  })
}
// 出库新增
export function reqOutStock(data) {
  return requests({
    method: 'post',
    url: 'http://43.138.43.158:2333/shop/out/add',
    headers: { 'Content-Type': 'application/json' },
    data
  })
}
// 出库新增查询
export function reqGetOutStock(shopId) {
  return requests({
    method: 'get',
    url: `http://43.138.43.158:2333/shop/out/list?pageNo=1&pageSize=10&shopId=${shopId}`
  })
}
// 获取供应商
export function reqGetSupplier() {
  return requests({
    method: 'get',
    url: 'http://43.138.43.158:2333/shop/supplier/list'
  })
}
// 获取供应商商品列表
export function reqGetSupplierGoods(supplierid) {
  return requests({
    method: 'get',
    url: `http://43.138.43.158:2333/shop/supplier/listGoods?supplierId=${supplierid}`
  })
}
// 获取热销商品列表
export function reqGetBestGoods(shopid) {
  return requests({
    method: 'get',
    url: `http://43.138.43.158:2333/shop/home/hotGoods?shopId=${shopid}`
  })
}
