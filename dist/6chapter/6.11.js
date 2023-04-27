"use strict";
// record实战
Object.defineProperty(exports, "__esModule", { value: true });
let todoList = [
    {
        title: "开发权限管理模块",
        completed: true,
        description: "使用Vue3+typescript来开发",
    },
    {
        title: "年会",
        completed: false,
        description: "12月29号上午开心酒店1楼105",
    },
];
// 实现效果:
const pickTodoList = {
    开发权限管理模块: {
        title: "开发权限管理模块",
        completed: true,
    },
    年会: {
        title: "年会",
        completed: false,
    },
};
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };
function arrToObj(arr, mainKey, pickKeys) {
    let obj = {};
    arr.forEach(item => {
        obj[item[mainKey]] = {};
        pickKeys.forEach(key => {
            obj[item[mainKey]][key] = item[key];
        });
    });
    return obj;
}
const obj = arrToObj(todoList, 'title', ['title', 'completed']);
console.log(obj);
