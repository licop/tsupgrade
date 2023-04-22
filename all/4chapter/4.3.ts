// 给定泛型默认值
class ArrayList<T = any> {
  arr: Array<T>;
  index: number=0
  constructor() {
    this.arr = []
  }
  add(ele: T) {
    this.arr[this.index++] = ele
  }

  get(index: number) {
    return this.arr[index]
  }
}

let arrList = new ArrayList()
arrList.add('adc')



export {}