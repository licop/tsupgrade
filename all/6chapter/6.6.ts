// in keyof 在大中项目中的综合实战应用
// 实现扁平属性名

type Modules = {
  menu: {
    setActiveIndex: (index: string) => string
    setCollapse: (index: string) => string
  }

  tabs: {
    seteditableTabsValue: (editValue: string) => void
    setTabs: (index: string) => void
    setTabsList: (index: string) => void
  }
}


// 模版字符类型
type AddPrefix<T, U> = `${T & string}/${U & string}`

type GetSpliceKeys<T> = {
  [K in keyof T]: AddPrefix<K, keyof T[K]>
}[keyof T]

type TestSpliceKeys = GetSpliceKeys<Modules>

export {}
