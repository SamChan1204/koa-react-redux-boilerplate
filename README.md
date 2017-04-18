<!--
@Author: SplendourHui
@Date:   2016-04-29 09:54
@Last modified by:   SamChan
@Last modified time: 2016-05-05T17:27:22+08:00
-->



## koa-react-redux-boilerplate

> 使用 koa + react + redux 的初始项目

### 用法

#### 运行
```
npm start
```

#### 测试
```
npm test
```
使用 Mocha + Chai 测试框架

#### 配置文件
在根目录下，新建 config.json 配置文件。参考配置如下：
```
{
  "port": 3000
}
```



#### 目录结构
```
- _client_src
  - actions
    common_dialog.js  // 对话框相关 actions
    common_message.js  // 消息相关 actions
    common.js  // 通用 actions
  
  - components  // 无状态组件
  
  - containers  // 有状态页面（组件）
  
  - middlewares
    request  // 请求中间件
  
  - reducers
    dialog.js  // 对话框相关 reducer
    message.js  // 消息相关 reducer
    index.js  // 入口文件，包括通用 reducer
  
  - store
    configureStore.js  // store 初始化
    schemas.js  // 定义 schemas
  
  - utils  // 辅助文件
  
  index.jsx  // 入口文件
  routes.jsx  // 路由配置文件
  base.less  // 基础样式文件
  common.less  // 通用样式文件，如颜色定义
  
- common
  constants.js  // 常量定义
  error_helper.js  // error 类型定义
  message_helper.js  // 返回 message 辅助类
  request_helper.js  // 请求辅助类
  tools.js  // 常用工具
  
- config  // 配置文件
  
- middlewares  // koa 中间件
  
- public  // 静态文件夹
  
- routes  // koa 路由
  
- test
  
- views
  
.eslint  // eslint 代码校验规则文件
  
.gitignore  // gitignore
  
app.js  // koa 主线程文件
  
package.json  // package.json
  
README.md  // README
  
webpack.config.js  // webpack 配置文件
```



#### 其他
- 参数校验: [koa-validate](https://github.com/RocksonZeta/koa-validate)

- 日志记录:
  - 全局
  ```
  global.koaLogger.log('Hello logger');
  ```
  - 请求中
  ```
  this.koaLogger.log('Hello logger in request');
  ```

- body:
  - params: `this.request.body.fields`
  - files: `this.request.body.files`
