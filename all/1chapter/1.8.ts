// type Product =  {
//   name: string,
//   price: number,
//   account: number
// }

interface Product {
  name: string
  price: number
  account: number
  buy(): void
}

let p: Product = {
  name: 'phone',
  price: 100,
  account: 10,
  buy() {

  }
}

// 接口可以继承
interface Pet {
  name: string
  love: number
  health: number
  toHealth(): void
}

// 在类中使用接口
interface Dog extends Pet {
  strain: string
  guardHome(): void
}

interface List {
  add(): void
  remove(): void
}

class ArrayList implements List {
  add (): void {
    throw new Error('Method not implemented.')
  }
  remove (): void {
    throw new Error('Method not implemented.')
  }
}


