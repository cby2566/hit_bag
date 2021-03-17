//main.js 
const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());

// const imageBox = require('./src/component/imageBox.js');
// document.querySelector("#root").appendChild(imageBox());

import impoetIoc from './src/component/impotIoc.js';
console.log(impoetIoc);

document.querySelector("#root").appendChild(impoetIoc.imgDiv);

import css from './src/resources/style/main.css';
console.log(css);
// 引入的css会直接自动跟随js添加到index.html中，添加到头部
let red_span = document.createElement('span');
red_span.classList.add('span1');
red_span.innerHTML = "<br>红";
document.querySelector("#root").appendChild(red_span);

// 引入sass进行编译
// 注意npm上直接安装是版本11+，需要控制到7.x版本
import  './src/resources/style/css_plus.scss';
let blue_span = document.createElement('span');
blue_span.classList.add('span2');
blue_span.classList.add('span3');
blue_span.innerHTML = "蓝";
document.querySelector("#root").appendChild(blue_span);

// 使用最简单的模式构建vue, 和他的组件
/**
 * 我在 webpack.config 里添加resolve属性，
 * 用来处理 import Vue from "vue" ， 解析为 import Vue from "vue/dist/vue.esm.js"
 * 
 * 我在 package.json 里修改了 main 属性的指向
 *  */ 
import Vue from "vue"
import single3 from "./src/component/simpleVue.vue"

// 引入element3
// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
// Vue.use(ElementPlus)

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