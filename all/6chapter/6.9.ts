// TS 高级类型——Record 和它的真实应用
// Record类型工具可以用来定义一个由指定类型的属性组成的对象类型。

// 能用object的地方Record都能替代
function addObj(rec: Record<"name"|"age"|"address" , string | number>) {
   
}

addObj({name: 'wangwu', age: 14, address: 'dd'})
export {}

// keyof any = string | number | symbol
type Record<K extends keyof any, T> = {
  // in 
  [P in K]: T;
};

