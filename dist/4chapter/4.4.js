"use strict";
// 泛型约束
Object.defineProperty(exports, "__esModule", { value: true });
// keyof 表示获取一个类或者对象类型，或者一个接口类型的所有属性名[key]组成的联合类型
class Order {
    printOrd() { }
    static getCount() { }
}
// Vue3 源码中的泛型约束
class ObjectRefImpl {
    constructor(_object, _key) {
        this._object = _object;
        this._key = _key;
        this.__v_isRef = true;
    }
    get value() {
        return this._object[this._key];
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
}
// 根据传进来的值反向推断泛型传进来的值
const obj = new ObjectRefImpl({ username: "lisi", age: 23 }, "age");
