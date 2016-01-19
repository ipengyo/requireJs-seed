# js规范

## 目录组织

```javascript
└─public
    ├─images
    ├─js //自己写代码的地方
    ├─lib //第三方包存放的地方
    │  ├─jquery 
    │  ├─jquery-base64  (https://github.com/carlo/jquery-base64)
    │  ├─jquery-cookie  (https://github.com/huya-fed/jquery-cookie)
    │  ├─jquery-dateFormat (https://github.com/phstc/jquery-dateFormat)
    │  ├─jquery-MD5 (https://github.com/placemarker/jQuery-MD5)
    │  ├─layer (http://layer.layui.com/)
    │  ├─layerMobile (http://layer.layui.com/mobile/)
    │  ├─lazyload (https://github.com/jieyou/lazyload)图片懒加载的
    │  ├─require-css (用于加载css的require插件)
    │  ├─requirejs
    │  ├─swiper
    │  └─xarch
    └─styles //自己写css的地方

```
## 阅读文章:

** 1.必需要读: ** 

> [Javascript模块化编程（一）：模块的写法](http://www.ruanyifeng.com/blog/2012/10/javascript_module.html)

> [Javascript模块化编程（二）：AMD规范](http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html)

> [Javascript模块化编程（三）：require.js的用法](http://www.ruanyifeng.com/blog/2012/11/require_js.html)

> [前后端数据交互的几种方法](https://github.com/nimojs/blog/issues/13)

** 2.选择阅读： **

> [模块化编程 , 理解requireJS-实现一个简单的模块加载器](http://www.cnblogs.com/yexiaochai/p/3961291.html)

> [如何写一个Jquery插件](http://i5ting.github.io/How-to-write-jQuery-plugin/build/jquery.plugin.html)

> [JQuery最佳实践](http://www.ruanyifeng.com/blog/2011/08/jquery_best_practices.html)

> [移动前端开发经验指南](https://github.com/doyoe/trip)

> [JQuery常用插件](https://github.com/ipengyo/jquery-plugins)

> [如何使用Google](http://laod.cn/hosts/2015-google-hosts.html)

## 代码抒写

** 1. 使用AMD规范组织代码 **

```javascript

　　define(['myLib'], function(myLib){
　　　　function foo(){
　　　　　　myLib.doSomething();
　　　　}
　　　　return {
　　　　　　foo : foo
　　　　};
　　});
```

** 2. 代表jQuery对象的变量前面可以加个$,这样一眼就能看出来是个jQuery对象。 **

```javascript

var $dom = $("#dom");
```

** 3.函数参数大于3个的时候，应该使用对象封装起来(避免修改参数而导致函数参数乱序) **

```javascript

var myfn = function(opts){

	opts && console.info(opts.a);//输出a参数

	opts && console.info(opts.b);//输出b参数

	opts && console.info(opts.c);//输出c参数
}

```

** 4. JS里声明变量必须加上 var 关键字 **

** 5. JS代码结尾统一约定加';' **

** 6. JSON对象的最后一个字段、数组最后一个元素后面都不能加',',在IE8下会报错：所以{a:1,b:2,}/[1,2,] 都是不对的. ** 

** 7. JS模块里面私有的方法前面可以加_,公有方法不加，但是函数内的局部变量就没必要加_了； **





