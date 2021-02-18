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