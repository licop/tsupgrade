// 泛型学习
// 泛型定义的时候不明确，使用的时候必须明确的一种数据类型

interface Ref<T> {
  value: T
}

type Student = {name: string, age: number}

let ref:Ref<Student> = {
  value: {name: 'licop', age: 23}
} 

console.log(ref.value.age) // 有提示


export {}