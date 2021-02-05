//main.js 
const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());

// const imageBox = require('./src/component/imageBox.js');
// document.querySelector("#root").appendChild(imageBox());

import impoetIoc from './src/component/impotIoc.js';
console.log(impoetIoc);

document.querySelector("#root").appendChild(impoetIoc.imgDiv);