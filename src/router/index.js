import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import( /* webpackChunkName: "login" */ '@/views/login/login.vue')
  },  
  {
    path: '/index',
    name: 'index',
    component: () => import( /* webpackChunkName: "index" */ '@/views/index/index.vue')
  }, 
]

const router = new VueRouter({
  routes
})

// 先把VueRouter原型对象的push replace  方法保存一份 
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push方法 第一个参数
VueRouter.prototype.push = function (location, resolve, reject) {
  // console.log(this);//实例
  // 判断如果成功或失败回调已经传了
  if (resolve && reject) {
    // call 调用函数一次  改变this指向
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}

export default router
