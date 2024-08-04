// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Web3 from 'web3'
import ElementUI from 'element-ui';
import VueDragscroll from 'vue-dragscroll'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import less from 'less';
// import './components/element/index'
import {post,get,patch,put,gets} from '../utils/http';
import store from './store'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get = get;
Vue.prototype.$gets = gets;
Vue.prototype.$patch=patch;
Vue.prototype.$put = put;
if(typeof web3 !== "undefined"){
    web3 = new Web3(web3.currentProvider)
}else{
    var rpcUrl = 'https://bsc-dataseed.binance.org/';
    web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl));
}

Vue.prototype.$web3 = web3;

Vue.use(ElementUI);
Vue.use(VueDragscroll)
Vue.use(Vant);

Vue.use(less)
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
router.beforeEach((to, from, next) => {
    next();
    // if(to.path == '/'){
    //   sessionStorage.setItem("tabIdex",0);
    //   next();
    // }else if(to.path == '/userinfo/person'){
    //   sessionStorage.setItem("tabIdex",1);
    //   next();
    // }else{
    //   next();
    // }

})