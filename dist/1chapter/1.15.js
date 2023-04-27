"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Promise {
    //  promiseParams 函数类型为(resolve: ResolveType, reject: RejectType) => any的参数
    constructor(promiseParams) {
        this.resolveFunc = (resolve_success) => {
            console.log(resolve_success);
        };
        this.rejectFunc = (reject_fail) => {
            console.log(reject_fail);
        };
        // 执行promiseParams 等于是执行S100的代码
        promiseParams(this.resolveFunc, this.rejectFunc);
    }
}
new Promise(function (resolve, reject) {
    resolve("成功了"); // 执行S98函数 
    reject("失败了"); // 执行S99函数
});
