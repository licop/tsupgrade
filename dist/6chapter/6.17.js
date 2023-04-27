"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arr = [
    {
        stuNo: 100,
        stuName: "王五",
        stuClass: 1,
        teacherNo: 5,
        teacherName: "王涛",
    },
    {
        stuNo: 102,
        stuName: "卡特",
        stuClass: 1,
        teacherNo: 6,
        teacherName: "陈萍",
    },
    {
        stuNo: 103,
        stuName: "周鹏",
        stuClass: 2,
        teacherNo: 5,
        teacherName: "沈腾",
    },
];
function getSubItemFromArr(arr, keys) {
    return arr.map(item => {
        return keys.reduce((pre, cur, index) => {
            return Object.assign(Object.assign({}, pre), { [cur]: item[cur] });
        }, {});
    });
}
console.log(getSubItemFromArr(arr, ['stuClass', 'stuNo']));
