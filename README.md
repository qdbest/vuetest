## 初始化项目
  1. vue-cli创建项目
  ```
  D:\vueproject>vue init webpack mytest

  ? Project name mytest
  ? Project description A Vue.js project
  ? Author 郭玉成 <13792897868@139.com>
  ? Vue build standalone
  ? Install vue-router? Yes
  ? Use ESLint to lint your code? No
  ? Set up unit tests No
  ? Setup e2e tests with Nightwatch? No
  ? Should we run `npm install` for you after the project has been created? (recommended) npm

     vue-cli · Generated "mytest".


  # Installing project dependencies ...
  # ========================


  > uglifyjs-webpack-plugin@0.4.6 postinstall D:\vueproject\mytest\node_modules\webpack\node_modules\uglifyjs-webpack-plugin
  > node lib/post_install.js

  npm notice created a lockfile as package-lock.json. You should commit this file.
  npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

  added 1127 packages in 26.002s

  # Project initialization finished!
  # ========================

  To get started:

    cd mytest
    npm run dev
```
  2. 删除不必要的组件、路由设置等
  3. 运行程序
  ```
  cd mytest
  npm run dev
  ```
### 测试一：开发环境跨域
  ```
  修改config->index.js
  proxyTable: {
        '/api': {
          target: 'http://localhost:8006',//后端接口地址
          changeOrigin: true,//是否允许跨越
          pathRewrite: {
            '^/api': '/',//重写,
          }
        }
      },
  ```
### 测试二：文件上传
  1. 安装Element-ui
  ```
  npm install element-ui
  ```
  2. 在main.js中导入并使用
  // 引入element-ui及css文件
  import ElementUi from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'

  Vue.use(ElementUi, { size: 'small' })
  3. 新建组件UploadFile
  ```
  <template>
    <el-upload
      class="upload-demo"
      action="/api/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList2"
      list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </template>
  <script>
    export default {
      data() {
        return {
          fileList2: [{
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }, {
            name: 'food2.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }]
        };
      },
      methods: {
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        }
      }
    }
  </script>
```
  4. 添加路由
```
routes: [
    {
      path: '/upload',
      component: UploadFile
    }
  ]
```
  5. 效果如下
![avatar](https://github.com/qdbest/mytest/blob/master/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20181109214256.png?raw=true)
