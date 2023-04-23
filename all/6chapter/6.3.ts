// 类型体操

// 使用条件类型和类型推导来实现类型转换和类型过滤
interface Person {
  name: string;
  age: number;
}

type Filter<T, U> = T extends U ? T : never;
type PersonName = Filter<keyof Person, string>;


// 使用映射类型和索引类型查询来实现对象属性的转换和过滤：

interface Person {
  name: string;
  age: number;
}

type Readonly1<T> = { readonly [P in keyof T]: T[P] };
type Partial1<T> = { [P in keyof T]?: T[P] };
type NonNullable1<T> = { [P in keyof T]-?: NonNullable<T[P]> };

type ReadonlyPerson = Readonly<Person>;
type PartialPerson = Partial<Person>;
type NonNullablePerson = NonNullable<Person>;

// ReadonlyPerson 的类型为 { readonly name: string; readonly age: number; }
// PartialPerson 的类型为 { name?: string; age?: number; }
// NonNullablePerson 的类型为 { name: string; age: number; }