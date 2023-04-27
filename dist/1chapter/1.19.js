"use strict";
// 可变元组
let customers = [
    "wangwu",
    23,
    "海口海淀岛四东路3号",
    "133123333",
    "一路同行,一起飞",
    "weixin"
];
// 可变元组解构
let [custname, age, address, ...rest] = [
    "wangwu",
    23,
    "海口海淀岛四东路3号",
    "133123333",
    "一路同行,一起飞",
    "weixin",
    "239999",
];
console.log("rest:", rest);
