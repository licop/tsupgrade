// 根类型, 包含所有类型
let data1: Object = 'licop'
let data2: {} = [1, 3, 5]

// 联合类型 接受其中某一种类型即可
let src: string | number = 'abc'

// 交叉类型
type Obj1 = { username: string }
type Obj2 = { age: number }
let obj: Obj1 = { username: 'abc' }
let obj2: Obj2 = { age: 3 } 

let obj3: Obj1 & Obj2 = { username: 'licop', age: 24 }

// 字面量数据类型
type num = 1|2|3
let n:num = 2

type increaseFlag = 0|1
function isStartUp(increase: increaseFlag) {
  if(increase) {
    console.log('up')
  } else {
    console.log('open')
  }
}
