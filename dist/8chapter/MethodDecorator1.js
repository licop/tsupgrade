"use strict";
// 方法装饰器
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
// 1 不带参数的方法装饰器
function MyMethodDecorator(targetClassPrototype, key, methodDecri) {
    console.log("targetClassPrototype:", targetClassPrototype); //
    console.log("key:", key); // DistribRoles
    console.log('数据属性', methodDecri);
    methodDecri.value(); // 执行被装饰器修饰的方法 DistribRoles函数
}
class RoleService {
    constructor() {
        this.roleName = "管理员";
    }
    DistribRoles() {
        console.log("分配角色.....");
    }
}
__decorate([
    MyMethodDecorator // 后执行
    ,
    MyMethodDecoratorWithParams('licop') // 先执行
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoleService.prototype, "DistribRoles", null);
// 2 带参数的方法装饰器
function MyMethodDecoratorWithParams(params) {
    // 闭包
    return function (targetClassPrototype, key, methodDecri) {
        console.log(params, 27);
        console.log("targetClassPrototype:", targetClassPrototype);
        console.log("key:", key); // DistribRoles
        console.log('数据属性', methodDecri);
        methodDecri.value(); // 执行被装饰器修饰的方法 DistribRoles函数
    };
}
