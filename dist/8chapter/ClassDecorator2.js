"use strict";
// 带参数类装饰器案例
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
function FirstClassDecorator(classinfo) {
    // 闭包 根据底层源码先执行 FirstClassDecorator(classinfo: string)函数,返回闭包函数，在对类进行包装
    return function (targetClass) {
        console.log(classinfo, 4);
        console.log(targetClass.prototype.constructor.name + "信息", 5);
        let targetClassObj = new targetClass();
        targetClassObj.buy(); // 下单购买
        console.log(targetClass.name); // CustomerService
    };
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
    FirstClassDecorator("我是参数"),
    __metadata("design:paramtypes", [])
], CustomerService);
