const symid = Symbol("productno")
interface Product {
  [symid]: number 
  name: string
  price: number
  account: number
  buy(): string
}

type A = Product["price"]
type B = Product["price" | "name"]
type S = Product[typeof symid]


type Pkeys = keyof Product // "name"|"price"|"account"|"buy"
let pkeys: Pkeys = 'account'

type AllKeys<T> = T extends any ? T : never
type Pkeys2 = AllKeys<keyof Product> //  typeof symid | "name" | "price" | "account" | "buy"
let pkeys2 = 2

export {}
