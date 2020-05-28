# React_Music

## 概述：

> 这次是项目是对 PC-ONEMUSIC项目进行一次重构。 [PC-ONEMUSIC地址](https://github.com/flingyp/PC-ONEMUSIC)。这次重构使用的框架不是国内的火爆前端框架 Vue 而是 在国外较流行一些的前端框架 React。 目的就是：最近学了React 这款框架想找项目做，找着找着还是决定用 **PC-ONEMUSIC项目** 准备重构一遍。

### 技术栈

+ React
+ React-Router
+ Redux
+ React-Redux
+ Redux-thunk 中间件
+ Less预处理器
+ Ant Design UI框架


### 配置Less预处理器

+ [参考文章](https://www.jianshu.com/p/87ecc24447c0)


### Ant Design 样式引入问题

我的Ant Design 样式 `import 'antd/dist/antd.less'; ` 在 App.less 文件引入 会报错， 错误提示如下

```
./node_modules/antd/lib/button/style/index.less (./node_modules/css-loader??ref--6-oneOf-7-1!./node_modules/postcss-loader/src??postcss!./node_modules/less-loader/dist/cjs.js!./node_modules/antd/lib/button/style/index.less)
// https://github.com/ant-design/ant-motion/issues/44
.bezierEasingMixin();
^
Inline JavaScript is not enabled. Is it set in your options?
      in /myproject/react/antedemo/node_modules/antd/lib/style/color/bezierEasing.less (line 110, column 0)
```

在全局组件 `App.jsx` 中引入就不会报错。

网上搜索了大概的解决方案，但是都太久了好像对不上，就暂时没有解决这个问题，先记录下。


