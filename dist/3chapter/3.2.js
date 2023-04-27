"use strict";
// 类型断言
let symid = Symbol("userid");
let user = { [symid]: 101, username: "wangwu", age: 23 };
let usrname = "username";
let userid = user[symid];
let username = user[usrname];
// 类型断言 尖括号类型
let someString = 'this is a string';
let strLength = someString.length;
// 类型断言 as语法
let someString1 = 'this is a string';
let strLength1 = someString.length;
// 非空断言
// 在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符 ! 可以用于断言操作对象是非 null 和非 undefined 类型。
// 具体而言，x! 将从 x 值域中排除 null 和 undefined 。
// 忽略 undefined 和 null 类型
function myFunc(maybeString) {
    // const onlyString: string = maybeString  // error
    const onlyString = maybeString; // ok
    const innoreUndefinedAndNull = maybeString; // ok
}
function myFunc1(numGenerator) {
    // const num1 = numGenerator() // error
    const num2 = numGenerator(); // ok
}
// 确定赋值断言
// 允许在实例属性和变量声明后面放置一个 ! 号，从而告诉 TypeScript 该属性会被明确地赋值
let x;
initialize();
console.log(2 * x);
function initialize() {
    x = 10;
}
