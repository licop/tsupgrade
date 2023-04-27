declare function $(ready: () => void): void 
declare function $(selector: any): CssSelector

type CssSelector = {
  // this 表示具有 css() 方法的对象本身，它可以被用于链式调用
  css: (key: string, value: string) => this
}