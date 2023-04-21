interface Student {
  name: string,
  age: number
}

// 类型注解
let data:number = 3
let stuObj:Student = {
  name: 'anna',
  age: 25
}

// 类型推导
let money = 'licop'
let stuObj2 = {
  name: 'anna',
  age: 25
} 

stuObj2 = {
  name: 'anna',
  age: 26
}