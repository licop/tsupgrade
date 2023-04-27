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
// 泛型工厂类继承装饰器的意义
// 可以在新建实例时在执行一些操作
function ClassFunctionExtends(mytargetClass) {
    console.log("mytargetClass", mytargetClass);
    class SonClass extends mytargetClass {
        constructor(...args) {
            super(args);
            console.log("SonClass执行结束");
        }
        commonMethod() {
            //console.log("this:", this)
            console.log("name:", this.name);
        }
    }
    return SonClass;
}
// 2. 目标类
let Test = class Test {
    // 1.先执行原来构造函数
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name, "吃饭");
    }
};
Test = __decorate([
    ClassFunctionExtends,
    __metadata("design:paramtypes", [String])
], Test);
//let SonClass = ClassFunctionExtends<typeof Test>(Test)
// let SonClass = ClassFunctionExtends(Test)
// let SonClassObj= new SonClass("wangwu");
let test = new Test('licop');
test.eat();
test.commonMethod();
