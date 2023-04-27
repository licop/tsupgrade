"use strict";
// 方法拦截器，在方法执行之前或之后完成特定功能
Object.defineProperty(exports, "__esModule", { value: true });
// 使用getOwnPropertyDescriptor和defineProperty
class People {
    constructor(_name, _age, _addr) {
        this.name = _name;
        this.age = _age;
        this.addr = _addr;
        People.count++;
    }
    doEat(who, where) {
        console.log(`who: ${who}, where: ${where}`);
    }
    doStep() { }
}
People.count = 0;
class StringUtil {
    static trimSpace(str) {
        return str.replace(/\s+/g, '');
    }
}
const dataProps1 = Object.getOwnPropertyDescriptor(People.prototype, 'doEat');
console.log(dataProps1, 24);
const targetMethod = dataProps1 === null || dataProps1 === void 0 ? void 0 : dataProps1.value;
dataProps1.value = function (...args) {
    console.log('前置拦截');
    // 去除空字符
    args = args.map(arg => {
        if (typeof arg === 'string')
            return StringUtil.trimSpace(arg);
        return arg;
    });
    targetMethod.apply(this, args);
    console.log('后置拦截');
};
// 通过 Object.defineProperty 把修改了 value 指向 的 dataprop 绑定到 原来的方法上
Object.defineProperty(People.prototype, 'doEat', dataProps1);
let p1 = new People('licop', 20, 'beijing');
p1.doEat('an na', 'hom e');
