"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function info(stuObj) {
    console.log("name:", stuObj.username, " age:", stuObj.age);
    return 3;
}
let stuObj = { username: "wangwu", age: 23, phone: "111" };
info(stuObj);
// 函数解构
function subInfo({ username, phone }) {
    console.log("name:", username, " phone:", phone);
    return 3;
}
subInfo({ username: "lisi", age: 33, phone: "222" });
