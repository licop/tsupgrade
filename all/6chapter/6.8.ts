// TS 高级类型——Exclude 和它的真实应用
// TypeScript中的Exclude类型工具可以用来从一个联合类型中排除部分类型，返回一个新的类型，该新类型不包含被排除的类型。

type TestExclude = Exclude<string | number | boolean, string | number> // boolean

// 其中，T是要处理的类型，U是要从T中排除的类型。
// type Exclude<T, U> = T extends U ? never : T;

