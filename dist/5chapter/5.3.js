"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
// 泛型函数重载
const _5_2_1 = require("./5.2");
var chineseArr = ["武汉", "石家庄", "郑州", "太原", "济南", "沈阳", "大连"];
function sortChinese(arr) {
    return arr.sort((pre, cur) => {
        return pre.localeCompare(cur, 'zh-CN');
    });
}
// 判断是否是中文
const pattern1 = /[\u4e00-\u9fa5]+/g;
function isChinese(arr) {
    return chineseArr.some(item => pattern1.test(item));
}
// 字符串的自排序
function strSelfSort(str) {
    const strArr = str.split('');
    const strSortArr = (0, _5_2_1.quickSort)(strArr);
    return strSortArr.join('');
}
function sort(data) {
    if (data instanceof Array) {
        if (isChinese(data)) {
            return sortChinese(data);
        }
        else {
            return (0, _5_2_1.quickSort)(data);
        }
    }
    else if (typeof data === 'string') {
        return strSelfSort(data);
    }
}
exports.sort = sort;
console.log(sort(chineseArr));
console.log(sort('dxghjkefff'));
