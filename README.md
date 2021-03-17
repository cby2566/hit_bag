npm run start

### 0316   

- 配置单文件组件
```
npm install -D vue-loader vue-template-compiler
```
添加vue单文件组件，需要一起安装。

- 安装element-plus  
```
npm install element-plus --save
```
全局引入 (样式需要单独引入)
装完之后报了个错
```
Cannot find module 'vue-loader'
```
我又重写安装vue-loader就好了。
全局引入有问题(结果是element-plus仅支持vue3)
- 安装element-plus  
```
npm i element-ui -S
```