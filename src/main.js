import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { createApp } from 'vue';
Vue.use(ElementUI);
Vue.config.productionTip = false
// 这里引入封装的 组件
import compontens from "./components.js"
Vue.use(compontens)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
