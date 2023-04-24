// in 用来遍历 | 联合类型：
// keyof 获取某种类型的所有键组成的联合类型。

interface Customer {
  name: string
  degree: number
  phone: string
}

// type CustKeyValsType = {
//   [P in keyof Customer]: Customer[P]
// }

type KeyValsType<T> = {
  [P in keyof T]: T[P]
}

type CustKeyValsType =  KeyValsType<Customer>


type Keys = keyof Customer // 不能直观的看到Keys的联合类型
type DirectKeys<T> = T extends any ? T : never
type CurKeys = DirectKeys<Keys> // 能直接显示结果

export {}


