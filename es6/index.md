## es6数组测试
```js
var arr=[1,2,'aaa',34,21,'str']
//  1、声明一个变量，查找arr数组中的aaa并且返回
//  2、声明一个变量，返回一个数组给arr数组内的每一项添加字符串'$'符号
//  3、声明一个变量，返回一个数组arr中的字符串
//  4、声明一个变量，放回布尔值，如果arr数组中存在字符串则放回true否则放回false
//  5、声明一个变量，放回布尔值，如果arr数组中所有值都是字符串则放回true否则放回false
//  6、声明一个变量，返回arr数组中数字的总和
```

## 数据过滤
```js
// 1、声明一个变量，返回list中的项，并且去掉重复的
// 2、声明一个变量，返回list中重复的项
var list=[
    {name:"aaa",age:13},
    {name:"bbb",age:15},
    {name:"ccc",age:17},
    {name:"ddd",age:22},
    {name:"bbb",age:15},
    {name:"aaa",age:13},
    {name:"bbb",age:16},
]
```

```js
// 1、声明一个变量，返回arr1和arr2中重复的项
var arr1=[
    {name:"aaa",age:13},
    {name:"bbb",age:15},
    {name:"ccc",age:17},
    {name:"ddd",age:22},
    {name:"bbb",age:15},
    {name:"aaa",age:13},
    {name:"bbb",age:16},
]
var arr2=[
    {name:"aaa",age:13},
    {name:"bbb",age:15},
    {name:"ccc",age:17},
    {name:"ddd",age:22},
    {name:"bbb",age:15},
    {name:"aaa",age:13},
    {name:"bbb",age:16},
]
```

## 其他小练习
```js
// 补充getColor函数内容，调用getColor函数获取返回随机十六进制颜色
function getColor(){
    let color
    // ......
    return color
}
let colorValue=getColor()
```

## 解答题：解答以下问题并举例说明.
- 说明数组中map和forEach的区别？
- 数组的find中，如果有两个以上条件满足，泽返回？
- 解释说明js的深拷贝和浅拷贝的区别
- 数组的浅拷贝方法有
- 对象的浅拷贝方法有
- 说明es6中箭头函数的特点和作用
- 说明所有js类型转换成的布尔值是？
- 解释说明什么是递归，并且手写一个递归函数出来
- 解释说明函数节流和函数防抖，并且分别手写出来。


## dom篇
- 使用js创建一个ui标签在里面循环50个li标签，给li标签添加一个click事件，点击li标签使标签背景颜色变蓝，点第二次则取消背景图

## 函数
写一个函数，调用函数时，返回函数的第一个括号和第二个括号相加的值
```js
add(1)(2) //3
add(1)(4) //5
```