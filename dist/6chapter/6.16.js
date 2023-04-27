"use strict";
// ReturnType 可以用来获取一个函数的返回值类型
// type ReturnType<T extends (args: any) => any> = T extends (args: any) =>  infer R ? R : never
function add(a, b) {
    return a + b;
}
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
function add1(a, b) {
    return b;
}
