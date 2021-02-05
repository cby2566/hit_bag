
let obj7 = "obj7"
import img from '/app/src/resources/hy.png';
// 我安装 file-loader 和 url-loader 
console.log(typeof img);

let imgDiv = document.createElement('img');
imgDiv.src = img;

export default { obj7, imgDiv }