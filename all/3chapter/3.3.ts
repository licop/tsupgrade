// 类型守卫
// 定义: 在语句的块级作用域【if语句内或者条目运算符表达式内】缩小变量的一种类型推断行为

// 实例判断： instanceof 
// 属性或方法判断： in
// 类型判断： typeof

// in 关键字
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if('privileges' in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}



// typeof 关键字
function cal(num: string|number) {
  // num+10 // error
  if(typeof num === 'number') {
    num+3 // or
  }
}

function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
      return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}


// instanceof
interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

let padder: Padder = new SpaceRepeatingPadder(6);

if (padder instanceof SpaceRepeatingPadder) {
  // padder的类型收窄为 'SpaceRepeatingPadder'
}


// 自定义类型守卫
// 返回布尔值的条件表达式赋予类型守卫的能力， 只有当函数返回 true 时，形参被确定为 A 类型
function isNumber(x: any): x is number {
  return typeof x === 'number'
}

function isString(x: any): x is string {
  return typeof x === 'string'
}

function cal1(arr: string | number) {
  if(isNumber(arr)) {
    arr+2
  } else if(isString(arr)) {
    arr.toString()
  }
}

// 自定义守卫来判断一个变量是否是 Promise 类型
// function isPromise(value: any): value is Promise<unknown> {
//   return value instanceof Promise
// }

function isPromise(value: any): value is PromiseLike<unknown> {
  // 检查 value 是否是一个对象，并且具有 'then' 方法，且 'then' 方法是一个函数
  return value && typeof value === 'object' && typeof value.then === 'function'
}





