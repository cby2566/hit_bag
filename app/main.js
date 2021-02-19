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
import scss from './src/resources/style/css_plus.scss';
let blue_span = document.createElement('span');
blue_span.classList.add('span2');
blue_span.classList.add('span3');
blue_span.innerHTML = "蓝";
document.querySelector("#root").appendChild(blue_span);