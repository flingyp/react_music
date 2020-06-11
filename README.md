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
            + PlayListDetail.jsx  歌单详情页面
            + Search.jsx      搜索页面
            + Loading.jsx     加载组件
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
+ Less预处理器
+ Axios
+ Iconfont图标库
+ video-react 视频组件
+ [Ant Design UI框架](https://ant.design/docs/react/introduce-cn)
+ [react-lazyload](https://github.com/twobin/react-lazyload)

### 体验

[体验](http://120.25.163.140:7777)

### 总结

这一次 使用了 React框架 开发这个项目 相当于 Vue 来说各有各的特点，而我所做的就是去适应不同框架开发的流程，当然 组件化开发在两个框架都有很好的体现， 但是本项目因为一些的样式的考虑、页面交互的编写等原因 让我在开发过程中没有很好的去规划组件的管理，所以组件化开发这一块没有做的很好。本项目其实也用不上 Redux 去 管理数据，但是为了去学习熟悉熟悉Redux 还是用上了一点， 谢谢。

## 项目搭建遇到的大坑小坑记录

### 1.配置Less预处理器

+ [参考文章](https://www.jianshu.com/p/87ecc24447c0)


### 2.Ant Design、轮播插件 等样式引入问题

我的Ant Design 样式 `@import 'antd/dist/antd.less';` 在 App.less 文件引入 会报错。但引入自己定义的样式文件不会报错。 
以下错误提示是Ant Design的错误代码：

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

### 3.关于 React-Router 的重定向方法 this.props.history.push('/xx') 的使用

我在使用 React-Router 的 this.props.history.push('/xx')进行重定向路由跳转的时候突然报错。然后报错的提示是

`cannot read property 'push' of undefined`

然后到网上查找该类问题的**解决方案**，找到这一篇[文章](https://segmentfault.com/a/1190000022272003)。

总结下来： 我调用这个方法**所在组件不是个路由组件**，所以提示 push 是 undefined， 只有路由组件才能调用该方法。 这个时候就会要到一个**高阶组件 `withRouter`**

withRouter介绍： 如果我们某个组件没有被Router管理, 但是我们要依靠它去跳转一个页面, 比如点击页面的logo, 返回首页, 这时候就可以使用withRouter`来做。

这个时候我又考虑什么才是路由组件？？？毕竟学React-Router没有考虑很全面，做项目就会把这种坑给填了。

**路由组件： 只有被Route组件包裹的算路由组件**

### 4.React map遍历 'index' is not defined no-undef 的问题

[参考文章](https://blog.csdn.net/YAOYU007/article/details/82177577)


### 5.解决react-router 带参数的路由 参数改变了 路由路径跳转了 页面数据没有刷新的问题

> 我在 MV 播放页面的 相关推荐遇到这个问题， 点击相关MV后 路由路径跳转了 参数也改变了 但是 页面上的数据没有刷新
解决方法：在 Home 页面上 的  Route 的标签 的父节点Content标签上添加了  `key={this.props.location.key}` 就可以解决问题。

在路由组件上最上层元素上加一个key增加路由的识别度，因为普通的跳转是根据path来识别的，但是path带上参数时，路由无法精确识别。不过，在跳转页面的时候，每个地址都会在localtion对象里添加一个key
[参考文章](https://blog.csdn.net/qq_36990322/article/details/89671289)


### 6.项目使用 != 报这样的警告 `Expected '!==' and instead saw '!='` 

解决方法： 在同一内行 添加 这条注释 `//eslint-disable-line`


### 7.标签动态添加类名， 如果本省标签有class类名， 还想要动态添加类名的时候  className的写法

[参考文章](https://blog.csdn.net/Anne_01/article/details/84953103) 


### 8. 无论有没有Route组件包裹还是出现 this.props.history 还是 undefined 的情况下 还是可以使用  withRouter 组件

[参考文章](https://www.jianshu.com/p/704b773b54fb)


### 9. this.setState() 方法  也是一个异步的过程 

在做MV部分的分页功能时遇见点击下一页获取数据时，数据没有发生改变，结果发现是传递参数没有变 就 在 this.setState 前 加上 await 就解决参数不变的问题了。

关于 setState 的注意点可以参考人家文章：[参考文章](https://www.jianshu.com/p/a883552c67de)