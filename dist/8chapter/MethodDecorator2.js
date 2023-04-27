"use strict";
// 方法装饰器 拦截器的使用
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class StringUtil {
    //工具类
    static trimSpace(str) {
        return str.replace(/\s+/g, '');
    }
}
// 去除参数的空格
function MethodInterceptor(params) {
    return function (targetClassPrototype, methodname, dataProps) {
        const targetMethod = dataProps.value;
        dataProps.value = function (...args) {
            args = args.map((arg) => {
                if (typeof arg === 'string')
                    return StringUtil.trimSpace(arg);
                return arg;
            });
            console.log('前置拦截...');
            console.log('args:', args);
            targetMethod.apply(this, args);
            console.log('后置拦截');
        };
    };
}
// 方法装饰器实现拦截器前置、后置功能
class RoleService {
    constructor() {
        this.roleName = '管理员';
    }
    get DistribRoles1_() {
        return this.DistribRoles1();
    }
    DistribRoles1() {
        // 分配角色
        console.log('分配角色.....');
    }
    DistribRoles(userName, isValid) {
        // 分配角色
        console.log('分配角色.....');
    }
}
__decorate([
    MethodInterceptor('DistribRoles方法'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoleService.prototype, "DistribRoles1", null);
__decorate([
    MethodInterceptor('DistribRoles方法'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], RoleService.prototype, "DistribRoles", null);
let roleService = new RoleService();
roleService.DistribRoles(' 张  三', true);
