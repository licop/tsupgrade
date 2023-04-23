// 泛型函数重载
import { quickSort } from './5.2'
var chineseArr = ["武汉", "石家庄", "郑州", "太原", "济南", "沈阳", "大连"]

function sortChinese(arr: Array<string>): Array<string> {
  return arr.sort((pre, cur) => {
    return pre.localeCompare(cur, 'zh-CN')
  }) 
}

// 判断是否是中文
const pattern1 = /[\u4e00-\u9fa5]+/g;
function isChinese(arr: Array<string>): boolean {
  return chineseArr.some(item => pattern1.test(item))
}

// 字符串的自排序
function strSelfSort(str: string) {
  const strArr = str.split('')
  const strSortArr = quickSort(strArr)
  return strSortArr.join('')
}

export function sort<T>(data: T): T
export function sort<T>(data: T) {
  if(data instanceof Array) {
    if(isChinese(data)) {
      return sortChinese(data)
    } else {
      return quickSort(data)
    }
  } else if(typeof data === 'string') {
    return strSelfSort(data)
  }
}
console.log(sort(chineseArr))
console.log(sort('dxghjkefff'))
export {}
