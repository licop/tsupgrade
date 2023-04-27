"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let o3 = { a: 'abc', b: 1, c: 'acd', d: 2 };
// 通用交叉方法
let o1 = { a: 'bb', b: 3 };
let o2 = { c: 'dfd', d: 1 };
function cross(obj1, obj2, obj3) {
    const combine = {};
    union(combine, obj1);
    union(combine, obj2);
    union(combine, obj3);
    return combine;
}
function union(combine, curObj) {
    for (let k in curObj)
        combine[k] = curObj[k];
    return combine;
}
cross(o1, o2);
function merge2Objects(target, source) {
    return Object.assign(target, source);
}
// 定义一个合并多个对象的泛型函数
function mergeObjects(target, ...objects) {
    return Object.assign(target, ...objects);
}
// 示例
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };
const mergedObj = mergeObjects(obj1, obj2, obj3);
console.log(mergedObj); // 输出: { a: 1, b: 3, c: 4, d: 5 }
