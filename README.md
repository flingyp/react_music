# React_Music

## 概述：

> 这次是项目是对 PC-ONEMUSIC项目进行一次重构。 [PC-ONEMUSIC地址](https://github.com/flingyp/PC-ONEMUSIC)。这次重构使用的框架不是国内的火爆前端框架 Vue 而是 在国外较流行一些的前端框架 React。 目的就是：最近学了React 这款框架想找项目做，找着找着还是决定用 **PC-ONEMUSIC项目** 准备重构一遍。

### 文件结构梳理
```
1. src
      + components          组件存放位置          
            + common        公共组件
            + HomeComponents Home页面存放的子组件
      + css                 样式存放位置
            +  components   组件的CSS样式存放位置
            +  pages        页面的CSS样式存放位置
            +  GlobalVariable.less 全局样式变量
      + pages               页面存放位置
            + Discovery.jsx   发现页面
            + Home.jsx        页面主题布局
            + Mv.jsx          MV页面
            + NewMusic.jsx    最新音乐页面
            + PlayList.jsx    推荐歌单页面
      + store               Redux相关文件  
      + static              静态文件存放位置
      + util                方法 + 请求等第三方插件存放位置
      + App.jsx             全局组件
      + App.less            全局样式
      + index.js            项目入口
```

### 技术栈

+ React
+ React-Router
+ Redux
+ React-Redux
+ Redux-thunk 中间件
+ Less预处理器
+ Ant Design UI框架

## 项目搭建遇到的大坑小坑记录

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

### 关于 React-Router 的重定向方法 this.props.history.push('/xx') 的使用

我在使用 React-Router 的 this.props.history.push('/xx')进行重定向路由跳转的时候突然报错。然后报错的提示是

`cannot read property 'push' of undefined`

然后到网上查找该类问题的**解决方案**，找到这一篇[文章](https://segmentfault.com/a/1190000022272003)。

总结下来： 我调用这个方法**所在组件不是个路由组件**，所以提示 push 是 undefined， 只有路由组件才能调用该方法。 这个时候就会要到一个**高阶组件 `withRouter`**

withRouter介绍： 如果我们某个组件没有被Router管理, 但是我们要依靠它去跳转一个页面, 比如点击页面的logo, 返回首页, 这时候就可以使用withRouter`来做。

这个时候我又考虑什么才是路由组件？？？毕竟学React-Router没有考虑很全面，做项目就会把这种坑给填了。

**路由组件： 只有被Route组件包裹的算路由组件**


