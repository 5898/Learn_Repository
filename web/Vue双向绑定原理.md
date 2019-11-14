# 前言

[Vue官方源码及文档指路(https://github.com/vuejs/vue)](https://github.com/vuejs/vue)

Vue是我初入编程时候第一个自学使用的MVVM框架，由艺术生设计师的尤雨溪大大开发，到2019已经更新到Vue3，是热门常用的web开发框架之一。基础使用就不说了，反正看官方文档和官方案例，把文档看仔细比什么都有用，而且官方是中文文档，很方便像我这种英语不好的人上手，Eh....



# MVVM和MVM

首先理解MVVM和MVM的区别，因为Vue是典型的*MVVM*模式。

### MVVM:Model-View-ViewModel,即模型-视图-视图模型。

简单来说，MVVM将视图UI和业务逻辑分开，实现双向绑定，大大的有利于维护前端代码。

核心是ViewModel，ViewModel是View和Model的关系映射，且视图(View)和数据(Model)不能直接通信。

当后端接收的数据(Model)变化，ViewModel监听到变化，则通知到对应的视图(View)去更新；

当用户操作视图(View)，ViewModel监听到变化，则通知数据(Model)改动。



### MVC:Model-View-Controller,即模型-视图-控制器。

C即页面业务逻辑，MVC是单向通信，用业务逻辑（数据处理，html、css操作等）代码把数据展示出来。

当视图(View)交互频繁操作、变化时候，需要写一堆Controller去反馈给(Model)；

当数据(Model)频繁变化等，需要频繁的主动更新以及渲染View，会造成加载慢、用户体验不好等影响。



# Vue双向绑定原理

> 如果用Vue开发过项目，几乎每个面试官都会问一句：“解释下Vue的双向绑定原理”。

通过*数据劫持+订阅发布者模式*实现的双向绑定。  

核心方法：Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调


## 数据劫持

> 语法：[`Object.defineProperty(obj, prop, descriptor)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

```js
var o = {};
var aVal = 111;
Object.defineProperty(o, 'a', {
    get: function () {
        console.log('get!');
        return aVal;
    },
    set: function (newVal) {
        console.log('set!', newVal);
        aVal = newVal;
    }
})

console.log(o.a);        //get
o.a = 222;               //set
console.log(o.a, aVal);  //get
```

### 发布订阅者模式

```javascript
//数据监听器Observer：对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者(dep.notify)
function Observer(data) {
    this.data = data;
    this.init(data);
}

Observer.prototype = {
    init: function (data) {
        if (!data || typeof data !== 'object') {
            return;
        }
        var me = this;

        Object.keys(data).forEach(function (key) {
            me.defineProperty(key, data[key]);
        });
    },
    defineProperty: function (key, val) {
        var dep = new Dep();
        //            var childObj=new Watcher();

        Object.defineProperty(this.data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function () {
                //添加事件Watcher
                if (Dep.target) {
                    console.log('addsub..:', Dep.target);
                    dep.depend();
                }
                return val;
            },
            set: function (newVal) {
                if (newVal === val) return;
                val = newVal;
                console.log('notify..:', val);
                //通知订阅者
                dep.notify();
            }
        })
    }
};


var uid = 0; //dep对象数量
//收集订阅者的容器(发布订阅模式)
function Dep() {
    this.id = uid++;
    this.subs = []; //sub:Watcher事件
}

Dep.prototype = {
    depend: function () { //传输dep对象
        Dep.target.addDep(this); //Watcher.addDep()
    },

    addSub: function (sub) { //监听
        this.subs.push(sub);
    },
    notify: function () { //通知
        this.subs.forEach(function (sub) {
            sub.update(); //Watcher.update()
        });
    },
    removeSub: function (sub) { //参考vue.js的remove()
        if (this.subs.length) {
            var index = this.subs.indexOf(sub);
            if (index > -1) {
                return this.subs.splice(index, 1)
            }
        }
    }
};
//缓存已有watcher对象(Dep.target)
Dep.target = null;

//订阅者Watcher事件：必须有Watcher.update()方法，
function Watcher(vm, node, key, type) {
    //        console.log(vm, node, key, type);
    Dep.target = this;
    this.vm = vm;
    this.node = node;
    this.key = key;
    this.type = type;
    this.depIds = {};
    this.update();
    Dep.target = null;
}

Watcher.prototype = {
    update: function () {
        this.get();
        this.node[this.type] = this.value; //赋值
    },
    get: function () {
        this.value = this.vm._data[this.key]; //触发Object.defineProperty的get
    },
    addDep: function (dep) { //获得dep对象，depId不存在则dep.addSub添加订阅者(watcher事件)，反之
        console.log(this.depIds.hasOwnProperty(dep.id), dep.id);
        if (!this.depIds.hasOwnProperty(dep.id)) {
            dep.addSub(this);
            this.depIds[dep.id] = dep;
        }
    }
};

//将跟节点el转换成文档碎片fragment进行解析编译操作，解析完成，再将fragment添加回原来的真实dom节点中
function Compile(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);

    if (this.$el) {
        this.$frag = this.node2Fragment(this.$el);
        this.compileElement(this.$frag); //解析模板
        this.$el.appendChild(this.$frag);
    }
}

Compile.prototype = {
    node2Fragment: function (el) {
        var frag = document.createDocumentFragment(), child;
        while (child = el.firstChild) { //child是指向元素首个子节点的引用,frag添加child节点后, el第一个节点移除，则child指向了本来排在第二个的元素节点，如此循环
            frag.appendChild(child);
        }
        return frag;
    },
    compileElement: function (el) { //frag/node解析
        console.log(el.childNodes);
        var childNodes = el.childNodes;
        var me = this;
        var reg = /\{\{(.*)\}\}/;

        [].slice.call(childNodes).forEach(function (node) {

            if (node.nodeType === 1) { //节点类型为元素:特殊指令v-html,v-if,v-for,v-bind:href/:href,事件指令v-on:click/@click

                var nodeAttrs = node.attributes;
                [].slice.call(nodeAttrs).forEach(function (attr) {
                    var attrName = attr.name;
                    if (attrName.indexOf('v-') == 0) {

                        /*v-model*/
                        var name = attr.value; //input1 nodeValue
                        //add watcher
                        new Watcher(me.$vm, node, name, 'value');
                        node.addEventListener('input', function (e) {//ie:.attachEvent('onclick',fn);.addEventListener("click",method1,false);
                            me.$vm._data[name] = e.target.value;
                        });
                        //                            node.value = me.$vm._data[name];
                        /*v-model*/

                        node.removeAttribute(attrName);
                    }
                })
            }

            if (node.nodeType === 3) { //节点类型为text:{{ msg }}
                var text = node.textContent;
                if (reg.test(text)) {
                    var name = RegExp.$1.trim();
                    new Watcher(me.$vm, node, name, 'textContent');
                }
            }

            //遍历子节点
            if (node.childNodes && node.childNodes.length > 0) {
                me.compileElement(node);
            }
        });
    },


};


function MVVM(options) {
    this.$options = options || {};
    this._data = options.data || {};

    new Observer(this._data); //劫持监听所有属性：开启对data的set和get观察
    new Compile(options.el, this); //dom解析
}

MVVM.prototype = {};


var vm = new MVVM({
    el: '#app',
    data: {
        input1: 111,
        input2: 222
    }
});
console.log(vm);
```


# 相关链接

[剖析Vue原理&实现双向绑定MVVM](https://segmentfault.com/a/1190000006599500)

[javascript实现数据双向绑定的三种方式](http://jixianqianduan.com/frontend-javascript/2015/11/29/js-data-two-ways-binding.html)

[Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

[Vue2.0源码阅读笔记--双向绑定实现原理](http://www.cnblogs.com/wj204/p/6423478.html)
