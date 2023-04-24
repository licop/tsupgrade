// TS 高级类型——Pick 和它的真实应用

// Pick主要用于抓取type类型，interface接口，类中的属性组成一个新的对象类型

interface Book {
  ISBN: string
  book_name: boolean
  book_price: string
  store_count?: number
  publish?: string
}

type SubBook = Pick<Book, 'ISBN' | 'book_name' | 'book_price'>

class Customer {
  name!: string
  age!: number
}

type SubCustmer = Pick<Customer, 'name'>


// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };
