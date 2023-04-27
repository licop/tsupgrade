"use strict";
// 感知声明文件存在的意义
Object.defineProperty(exports, "__esModule", { value: true });
exports.mounted = void 0;
function mounted(isStartUp) {
    if (isStartUp) {
        console.log("yes");
    }
    else {
        console.log("no");
    }
}
exports.mounted = mounted;
mounted(true);
