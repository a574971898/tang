// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import VueDragscroll from 'vue-dragscroll'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import less from 'less';
// import './components/element/index'
import {post,get,patch,put} from '../utils/http';

//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

Vue.use(ElementUI);
Vue.use(VueDragscroll)
Vue.use(Vant);

Vue.use(less)
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
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