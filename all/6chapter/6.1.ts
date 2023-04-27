// infer

// infer表示在extends条件语句中以占位符出现的等到使用时才推断出来的数据类型

interface Customer {
  custname: string
  buymoney: number
}

type CustFn=(params: Customer) => string
// 获取CustFn的参数类型
type CustParaTyp = CustFn extends (params: infer P) => any ? P : never  // Customer
// 获取CustFn的返回值类型
type CustReturnTyp = CustFn extends (params: any) => infer R ? R : never  // string

// 通用方法
type ReturnTyp<T> = T extends (params: any) => infer R ? R : never
type CustReturnTyp1 = ReturnTyp<CustFn> // string

// 获取数组中的元素类型
type EleOrArr<T> = T extends Array<infer P> ? P : never
type EleofArrTest = EleOrArr<Array<string>> // string