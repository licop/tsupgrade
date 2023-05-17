// 泛型函数 快速排序法
export function quickSort<E>(arr: Array<E>): Array<E> {
  if (arr.length < 2) {
    return arr
  }
  let left: Array<E> = []
  let right: Array<E> = []
  let mid = arr.splice(Math.floor(arr.length / 2), 1)[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(mid, quickSort(right))
}

const chineseArr = [3, 1, 8.3555, 9, 20, 15, 2, 7, 13, 11, 19, 18, 5, 6, 17, 4]
const result = quickSort(chineseArr)
result.forEach((item) => {
  item.toFixed(2)
})
const strArr = ["bad", "abc", "zxy", "kkk", "cdf"]
const strResult = quickSort(strArr)
console.log(strResult)

export {}
