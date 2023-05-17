// 条件类型

type Test = string extends string | number ? string : never

type CondType<T> = T extends string | number ? T : never 
type TestCondTyp = CondType<string | number | boolean> // string | number 

// 将属性添加到类型
type AppAttrToObj<T, K extends string, V> = {
  [P in keyof T | K]: P extends keyof T ? T[P]: V
}

interface Customer {
  name: string;
  degree: number;
  phone: string;
}

type CustomerAdd = AppAttrToObj<Customer, 'weixin', string>


export {}