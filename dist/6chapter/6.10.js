"use strict";
// Record 经典实战应用准备——isPlainObject 类型
Object.defineProperty(exports, "__esModule", { value: true });
let rec = [2, 5, 6]; // Record可以定义数组
// Record<string, any>类型的意思是要么是个对象要么是个数组
function isPlainObject(data) {
    return Object.prototype.toString.call(data) === '[object, Object]';
}
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    let cloneObj = {};
    if (isPlainObject(obj)) {
        cloneObj = {};
        Object.keys(obj).forEach(key => {
            cloneObj[key] = deepCopy(obj[key]);
        });
    }
    else if (Array.isArray(obj)) {
        cloneObj = [];
        obj.forEach(item => {
            cloneObj.push(deepCopy(item));
        });
    }
    return cloneObj;
}
let obj1 = {
    name: "haiping",
    age: 23,
    phone: [1111, 222, 333],
    roleList: [
        { roleid: 0, roleName: ["admin", "deptmanager"] },
        { roleid: 1, roleName: "general" },
    ]
};
const cloneObj1 = deepCopy(obj1);
