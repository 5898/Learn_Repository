## 前言

[Vue](https://github.com/vuejs/vue)是我初入编程时候第一个自学使用的MVVM框架，由原本是艺术设计师的尤雨溪大大开发，到2019已经更新到vue3，是热门常用的web开发框架之一。

基础使用就不说了，反正就看官方文档和官方案例，把文档看仔细比什么都有用，而且官方是中文文档，很方便像我这种英语不好的人上手，Eh....



Vue是典型的MVVM模式,首先理解MVVM和MVM的区别：


MVVM:Model-View-ViewModel,即模型-视图-视图模型。
简单来说，MVVM将视图UI和业务逻辑分开，实现双向绑定，大大的有利于维护前端代码。

核心是ViewModel，ViewModel是View和Model的关系映射，视图(View)和数据(Model)不能直接通信。
当后端接收的数据(Model)变化，ViewModel监听到变化，则通知到对应的视图(View)去更新；
当用户操作视图(View)，ViewModel监听到变化，则通知数据(Model)改动。



MVC:Model-View-Controller,即模型-视图-控制器。
C即页面业务逻辑，MVC是单向通信，用业务逻辑（数据处理，html、css操作等）代码把数据展示出来。

当视图(View)交互频繁操作、变化时候，需要写一堆Controller去反馈给(Model)；
当数据(Model)频繁变化等，需要频繁的主动更新以及渲染View，加载慢，影响用户体验。



## Vue双向绑定原理

> 如果用Vue开发过项目，几乎每个面试官都会问一句：“解释下Vue的双向绑定原理”。

Vue是通过 数据劫持+订阅发布者模式 实现的双向绑定。

### 数据劫持

[defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)语法:
`Object.defineProperty(obj, prop, descriptor)`
