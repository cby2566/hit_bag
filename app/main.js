//main.js 
import Vue from "vue"
import single3 from "./src/component/simpleVue.vue"

// 引入element2
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import VueRouter from 'vue-router'
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }


const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]


const router = new VueRouter({
  routes 
})

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(single3),
}).$mount('#vue')