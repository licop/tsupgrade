// 映射类型 in 的高级玩法

interface Todo {
  title: string;
  completed: boolean;
  description: string;
}

// type Omit<T, K extends keyof T> = {
//   [P in keyof T as P extends K ? never : P ]: T[P]
// }

type Omit<T, K extends keyof T> = {
  [P in keyof T as Exclude<P, K> ]: T[P]
}


type MyOmit = Omit<Todo, 'title'>

export {}

