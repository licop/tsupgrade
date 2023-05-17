// 交叉类型和通用交叉类型方法

type O1 = {a: string, b: number}
type O2 = {c: string, d: number}

type O3 = O1 & O2

let o3: O3 = {a: 'abc', b: 1, c: 'acd', d: 2} 


// 通用交叉方法
let o1: O1 = { a: 'bb', b: 3 }
let o2: O2 = { c: 'dfd', d: 1}


function cross<T extends object, U extends object>(obj1: T, obj2: U): T & U
function cross<T extends object, U extends object, Z extends object>(obj1: T, obj2: U, obj3: Z): T & U & Z

function cross<T extends object, U extends object, Z extends object>(obj1: T, obj2: U, obj3?: Z): any {
  const combine = {} as T & U & Z
  union(combine, obj1)
  union(combine, obj2)
  union(combine, obj3)

  return combine
}

function union(combine: any, curObj: any) {
  for(let k in curObj) combine[k] = curObj[k]
  return combine
}

cross(o1, o2)

function merge2Objects<T extends object, U extends object>(target: T, source: U): T & U {
  return Object.assign(target, source);
}

// 定义一个合并多个对象的泛型函数
function mergeObjects<T extends object>(target: T, ...objects: Object[]): T {
  return Object.assign(target, ...objects);
}



// 示例
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

const mergedObj = mergeObjects(obj1, obj2, obj3);
console.log(mergedObj); // 输出: { a: 1, b: 3, c: 4, d: 5 }



export {}