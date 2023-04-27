"use strict";
// 根类型, 包含所有类型
let data1 = 'licop';
let data2 = [1, 3, 5];
// 联合类型 接受其中某一种类型即可
let src = 'abc';
let obj = { username: 'abc' };
let obj2 = { age: 3 };
let obj3 = { username: 'licop', age: 24 };
let n = 2;
function isStartUp(increase) {
    if (increase) {
        console.log('up');
    }
    else {
        console.log('open');
    }
}
