// import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import routes1 from './routes1.js'
// const originalReplace = Router.prototype.replace
// Router.prototype.push = function (location) {
//   return originalReplace.call(this, location).catch(err => err)
// }
Vue.use(Router);


export default new Router({
  routes: [
    ...routes1,
  ],
    mode:"hash"
})
