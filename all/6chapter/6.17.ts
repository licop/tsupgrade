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
]


// 第一种写法
// function getSubItemFromArr<T, K extends keyof T>(arr: T[], args: K[]): Pick<T, K>[] {
//   return arr.map(subItem => {
//     const item = {} as T
//     args.forEach(arg => item[arg] = subItem[arg])
//     return item
//   })
// }

// 第二种写法
// 1. 获取数组中的元素类型
type EleofArr<T> = T extends Array<infer R> ? R : never

function getSubItemFromArr<T extends EleofArr<T>[], K extends keyof EleofArr<T>>
  (arr: T, keys: K[]): Pick<EleofArr<T>, K>[] {
  return arr.map(item => {
    return keys.reduce((pre, cur, index) => {
      return {...pre, [cur]: item[cur]}
    }, {})
  }) as Pick<EleofArr<T>, K>[]
}

console.log(getSubItemFromArr(arr, ['stuClass', 'stuNo']))

export {}