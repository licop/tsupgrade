// 函数类型
// function info(name: string, age: number): number {
//   return 3
// }

// info('licop', 23)

// type InfoFun = (name: string, age: number) => number
// let info: InfoFun = function(name, age) {
//   return 3
// } 

// rest 参数

function info(name: string, age: number, ...rest: any) {
  return rest
}

info('licop', 23)
