"use strict";
// any可以是任何类的父类，所以任何类型的变量都可以赋值给 any 类型的变量。
// let str: Array<string> = ['licop', 'anna']
// let data: any = str
Object.defineProperty(exports, "__esModule", { value: true });
// any 也可以是任何类的子类,所以 any 类型的变量都可以赋值给 其他类型的变量
// let data: any = ['ab', 'cd']
// let num: number = data
// unkown可以是任何类型的父类，不是任何类型的子类
// let data: unknown = ["ab", "df"]
// let num: number = data
// 不能拿 unknown 类型的变量来获取任何属性和方法，但 any 类型的变量可以获取任意名称的属性和任意名称的方法。
function getData(data) {
    console.log(data[0]);
}
