// Record, Capitalize, Exclude 映射类型， 函数约束综合真实应用

interface Todo {
  title: string;
  completed: boolean;
  description: string;
  add(): number;
  del(): number;
  upt(): number;
}

// 排除数组类型
type ExcArr<T> = Exclude<T, Array<any>>

// 为函数添加do前缀, 只能传递对象不能传数组
type Degree<T extends Record<string, any>> = {
  [P in keyof ExcArr<T> as ExcArr<T>[P] extends Function ? `do${Capitalize<P & string>}` : never]: ExcArr<T>[P]
}

type DegreeTodo = Degree<Todo>
type DegreeTodo1 = Degree<Array<any>>


// 数组中的属性名和方法名组成的联合类型
type Convert<T> = T extends any ? T : never
type TestArrayKeys = Convert<keyof Array<any>>

type Test = 'do'
type TestCap = Capitalize<Test> 

export {}

