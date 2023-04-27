"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let p = {
    name: 'ok',
    price: 100,
    account: 100,
    desc: 'desc',
    // key不是string类型也不错报错
    [Symbol("stockno")]: 1000,
    100: 'ok'
};
