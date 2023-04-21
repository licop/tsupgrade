// 可索引签名
interface Product {
  name: string
  price: number
  account: number
  [x: string]: any
}

let p: Product = {
  name: 'ok',
  price: 100,
  account: 100,
  desc: 'desc',
  // key不是string类型也不错报错
  [Symbol("stockno")]: 1000,
  100: 'ok'
}

type A = Product["name"]
type B = Product["name"|"account"] 
export {}
