"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// 不带参数的类装饰器案例：
function FirstClassDecorator(targetClass) {
    let targetClassObj = new targetClass();
    targetClassObj.buy(); // 下单购买
    console.log(targetClass.name); // CustomerService
}
let CustomerService = class CustomerService {
    constructor() {
        this.name = "下单";
    }
    buy() {
        console.log(this.name + "购买");
    }
    placeOrder() {
        console.log(this.name + "下单购买");
    }
};
CustomerService = __decorate([
    FirstClassDecorator,
    __metadata("design:paramtypes", [])
], CustomerService);
// 使用类装饰器修改类的原型
function addMethodToPrototype(target) {
    target.prototype.newMethod = function () {
        console.log('This is a new method added to the class prototype.');
    };
}
let MyClass = class MyClass {
};
MyClass = __decorate([
    addMethodToPrototype
], MyClass);
const myClass = new MyClass();
myClass.newMethod(); // 输出 "This is a new method added to the class prototype."
// 使用类装饰器来添加静态属性
function addStaticProperty(target) {
    target.newStaticProperty = "This is a new static property.";
}
let MyClass1 = class MyClass1 {
};
MyClass1 = __decorate([
    addStaticProperty
], MyClass1);
// 访问新添加的静态属性
console.log(MyClass1.newStaticProperty); // 输出 "This is a new static property."
