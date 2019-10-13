# Call, Apply, Bind调用的区别

更改this指向的方法

call传递参数列表，apply传递参数数组

语法：

fn.call(对象,参数1，参数2,....);//此地参数是指的是对象的参数，非方法的参数；

fn.apply(对象,参数数组)//参数数组的形式:[参数1，参数2,......]

bind


# 闭包和作用域

闭包允许函数访问并操作函数外部的变量


# let,var,const区别

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



# 堆和栈


# 相关链接

JavaScript忍者秘籍(第2版)

[JavaScript中var、let和const的区别](https://blog.csdn.net/qq_30216191/article/details/81042842)