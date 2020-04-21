## 变量提升和函数提升Hosting
原js没有块级作用域，只有函数作用域和全局作用域
es6新增块级作用域，由{}包括，如 if、for里面的{}，其中let只能在块级作用域里访问，有“暂时性死区”特性
for每次循环都是一个新块级作用域，所以let每次都是新变量

原因：
var变量提升全局/函数内
函数提升，块级/全局/函数内
```javascript
var a=0;
if(true){
  a=1;
  function a(){};
  a=21;
  console.log('里面'+a);
}
console.log('外面'+a);
// 输出 21 1


var a=0;
console.log(0,a); // 0
// if (true) {
  console.log(1, a); // function a，函数提升，函数提升存在块级作用域
  a=1;
  console.log(2,a); // 1
  function a() {}
  console.log(3, a); // 1
  a=21;
  console.log(4,a); // 21
// }
console.log(5,a); // 1
```






## 深拷贝
### 对象的深拷贝
扩展运算符(…)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中

只拷贝一层
```javascript
var obj = {
    id: 1,
    name: 'andy',
    msg: {
        age: 18
    }
};
var o = {};
// Object.assign合并对象，后面对象的同名属性会覆盖前面的对象
let new_obj = Object.assign({}, obj);
// 等价于(es6写法)
let new_obj = { ...obj };

// 合并{a:2, b: 4}和bar
let new_obj2 = {...obj, ...{a:2, b: 4}};


obj.id = 2;
obj.msg.age = 20;
console.log(obj); //{id: 1,name: 'andy', msg:{age:20}}
```
### 用递归拷贝
```javascript
var obj = {
    id: 1,
    name: 'andy',
    msg: {
        age: 18
    },
    color: ['pink', 'red']
};
var o = {};

// 封装函数 
function deepCopy(newobj, oldobj) {
    for (var k in oldobj) {
    // 判断我们的属性值属于那种数据类型
        // 1. 获取属性值  oldobj[k]
        var item = oldobj[k];
        // 2. 判断这个值是否是数组，返回布尔值
        if (item instanceof Array) {
            newobj[k] = [];
            deepCopy(newobj[k], item)
        } else if (item instanceof Object) {
        // 3. 判断这个值是否是对象，返回布尔值
            newobj[k] = {};
            deepCopy(newobj[k], item)
        } else {
        // 4. 属于简单数据类型
            newobj[k] = item;
        }
    }
}
deepCopy(o, obj);
```

### 数组的深拷贝
```javascript
const arr1 = [1, 2];
const arr2 = [...arr1];

// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错
// 报错
const [...rest, last] = [1, 2, 3, 4, 5];
// 报错
const [first, ...rest, last] = [1, 2, 3, 4, 5];
```

## Call, Apply, Bind调用的区别

更改this指向的方法

call传递参数列表，apply传递参数数组

语法：

fn.call(对象,参数1，参数2,....);//此地参数是指的是对象的参数，非方法的参数；

fn.apply(对象,参数数组)//参数数组的形式:[参数1，参数2,......]

bind


## 闭包和作用域

闭包允许函数访问并操作函数外部的变量


## let,var,const区别

### var

1.声明的变量作用域为函数/全局

2.可以重复声明

```js
var a = 1;
var a = 2;
console.log(a); // 2
```

3.存在变量提升(hoisting)现象，即在作用域内可以先使用，后声明

```js
console.log(a); // undefined；变量提升，变量赋值不提升：已有a，但无值
var a = 1;
```


### let

1.作用域为块级作用域{}

2.不能重复声明

```js
let b = 1;
let b = 2;     // 报错，Uncaught SyntaxError: Identifier 'b' has already been declared
```

3.无变量提升现象，即必须先声明后使用



### const

1.作用域为块级作用域{}

2.声明常量，变量不能修改

```js
let C = 1;
let C = 2;     // 报错
C = 4;         // 报错
```

3.无变量提升现象，即必须先声明后使用

### var和let例子

打印出10个10：
```js
for (var i = 0; i < 10; i++) {
    setTimeout(function(){
        console.log(i);
    },100)
}
````

打印出0~9
```js
for (let i = 0; i < 10; i++) {
    setTimeout(function(){
        console.log(i);
    },100)
}
````



## 堆和栈



## require、import

### require/exports

AMD规范,运行时调用,可在任何地方使用

require是赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量

dep.js
```js
module.exports = {
  foo : function() {},
  a: 'a'
};

exports.fs = fs
module.exports = fs
```

app.js
```js
var dep = require('./dep.js'); 
console.log(dep.a);
dep.foo();

const fs = require('fs');

```

### import/export

ES6,编译时调用,必须放在文件开头

import是解构过程，babel将ES6转码为ES5，即import转码为require

dep.js
```js
export default fs
export const fs
export function readFile
export {readFile, read}
export * from 'fs'

export foo function(){}
export const a = 'a'
```

app.js
```js
import fs from 'fs'
import {default as fs} from 'fs'
import * as fs from 'fs'
import {readFile} from 'fs'
import {readFile as read} from 'fs'
import fs, {readFile} from 'fs'

import { foo, a } from 'dep'
console.log(a);
foo();
```

## 原型链


## Event Loop事件轮询
https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/?utm_source=html5weekly

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型。

浏览器单线程

同步任务( MainTask)：
异步任务：promise、setTimeout、setlnterval、DOM事件/渲染、Promise、Ajax；

    宏任务（task):script(整体代码)、setTimeout、setInterval、I/O、UI渲染
    微任务(MicroTask):需要在当前 task 执行结束后立即执行的任务,文档ECMAScript 中把微任务叫做jobs，如：Promise、Object.obsever、MutationObsever、process.nextTick
1.执行同步任务，同步任务队列执行完后；
2.执行微任务队列里所有微任务promise;
3.执行完微任务队列后，执行一个宏任务setTimeout;
4.循环：从1开始若有同步任务MainTask则执行(一般没有，除动态插入代码);若有2微任务队列更新则执行2，然后执行3



## promise、async await


## 异步和同步

### setTimeout
异步
改成同步：
```javascript
execAsync(fn) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fn);
        }, 1000);
    });
},

// vue 同步节点更新
await this.$nexttick(()=>{
    done();
})
```

## 函数节流throttle和函数去抖debounce

 函数节流【throttle】：让一个函数不要执行得太频繁，减少一些过快的调用来节流
    - 应用场景：
        - DOM 元素的拖拽功能实现（mousemove）
        - 射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）
        - 搜索联想（keyup）
        - 监听滚动事件scroll
        - 计算鼠标移动的距离（mousemove）
    - 实现：underscore.js:_.throttle
    - https://github.com/hanzichi/underscore-analysis/issues/22
```javascript
/**
 * 函数防抖,只执行最后触发的一次
 * @param {回调函数} fn
 * @param {时间间隔(ms)} delay
 */
export const debounce = (fn, delay) => {
  let timer = null;
  return () => {
    // clearTimeout(timer);
    if (!timer) {
      timer = setTimeout(function() {
        clearTimeout(timer);
        fn();
      }, delay);
    }
  };
};

/**
 * 函数节流
 * @param {回调函数} fn
 * @param {时间间隔(ms)} delay
 */
export const throttle = (fn, delay) => {
  let timer = null;
  let firstTime = true;
  return () => {
    if (firstTime) {
      fn();
      firstTime = false;
    }
    if (timer) {
      return;
    }
    timer = setTimeout(function() {
      clearTimeout(timer);
      fn();
    }, delay);
  };
};


// test
window.addEventListener("mousemove",throttle(()=>{
  console.log(1)
},1000))
```

## websocket

## ts

## 跨域CORS

同源策略（Same origin policy）

CORS:全称"跨域资源共享"(Cross-origin resource sharing)

## 事件机制

# 相关链接

JavaScript忍者秘籍(第2版)

[JavaScript中var、let和const的区别](https://blog.csdn.net/qq_30216191/article/details/81042842)

[import和require的区别](https://www.cnblogs.com/sunshq/p/7922182.html)
