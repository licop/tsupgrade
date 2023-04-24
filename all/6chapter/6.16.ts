// TS 高级辅助类型 Required， Partial， Readonly, ReturnType, Parameters
interface Todo {
  readonly title: string
  completed: boolean
  description: string
  date?: Date
  publisher?: string // 发表人
}

// 将属性都变成必选
// type Required<T> = {
//   [P in keyof T]-?: T[P];
// };
type Todo_ = Required<Todo>


// 将属性都变成可选的
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };
type Todo__ = Partial<Todo>


// 将属性变成只读
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// };

type Todo___ = Readonly<Todo>

// ReturnType 可以用来获取一个函数的返回值类型
// type ReturnType<T extends (args: any) => any> = T extends (args: any) =>  infer R ? R : never

function add(a: number, b: number): number {
  return a + b
} 

type AddReturn = ReturnType<typeof add>


// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

function add1(a: number, b: string): string {
  return b
} 

type AddParams = Parameters<typeof add1> // [a: number, b: string]