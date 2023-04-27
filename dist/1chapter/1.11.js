"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str;
console.log('str:', str);
// data: string | undefined
function fn(data) {
    // data?.toString()
    // data!.toString()
    if (data)
        data.toString();
}
fn();
// any, unknown, undefined类型可以接收undefined
// any, unknown, null类型可以接收null
let data = undefined;
