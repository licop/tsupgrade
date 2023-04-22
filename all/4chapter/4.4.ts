// 泛型约束

// keyof 表示获取一个类或者对象类型，或者一个接口类型的所有属性名[key]组成的联合类型

class Order {
  orderId!: boolean
  orderName!: string
  static count: number
  printOrd() {}
  static getCount() {}
} 

// type OrderType = Order['orderId']
// type OrderTypeAttrName = keyof Order
// let oian: OrderTypeAttrName = 'orderName'


type InstancePropKeys<T extends object> = keyof T
type OrdPropKey = InstancePropKeys<Order>


// Vue3 源码中的泛型约束
class ObjectRefImpl<T extends object, K extends keyof T> {
  public readonly __v_isRef = true

  constructor(private readonly _object: T, private readonly _key: K) {}

  get value() {
    return this._object[this._key]
  }

  set value(newVal) {
    this._object[this._key] = newVal
  }
}

type ObjTyp = { username: string; age: 23 }
type ObjKeysType<T extends object, K> = K extends keyof T ? K : never
type TestObjKeysTyp = ObjKeysType<ObjTyp, 'username' | 'age'>

// 根据传进来的值反向推断泛型传进来的值
const obj = new ObjectRefImpl({ username: "lisi", age: 23 }, "age")


export {}
