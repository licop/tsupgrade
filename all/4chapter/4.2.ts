// 类使用泛型
class ArrayList<T> {
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

let arrList = new ArrayList<string>()
arrList.add('adc')



export {}