// Record 经典实战应用准备——isPlainObject 类型
let rec: Record<string, any> = [2, 5, 6] // Record可以定义数组


// Record<string, any>类型的意思是要么是个对象要么是个数组
function isPlainObject(data: Record<string, any>) {
  return Object.prototype.toString.call(data) === '[object Object]'
}

type BaseType = string | number | boolean | null | undefined;

// 这里使用函数重载的意义在于约束 cloneObj， cloneObj是Record<string, any>类型，T是Record<string, any>子类类型
// 父类变量无法赋值给子类型，反过来是可以的
// 不用重载函数使用  cloneObj as T 也是可以的
function deepCopy<T extends Record<string, any> | BaseType>(obj: T) : T
function deepCopy<T extends Record<string, any> | BaseType>(obj: T) {
  if (obj === null || typeof obj !== 'object' ) {
    return obj;
  }

  let cloneObj: Record<string, any> = {}

  if(isPlainObject(obj)) {
    cloneObj = {}
    Object.keys(obj).forEach(key => {
      cloneObj[key] = deepCopy(obj[key])
    })
  } else if(Array.isArray(obj)) {
    cloneObj = []
    
    obj.forEach(item => {
      cloneObj.push(deepCopy(item))
    })

  }
  
  return cloneObj;
}

let obj1 =   {
  name: "haiping",
  age: 23,
  phone: [1111, 222, 333],
  roleList: [
   { roleid: 0, roleName: ["admin","deptmanager"] },
   { roleid: 1, roleName: "general" },
  ]
}

const cloneObj1 = deepCopy(obj1)

console.log(obj1, cloneObj1, 54)

export {}


