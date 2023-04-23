export default class CommercialBank {
  public address: string = "beijing"
  public name: string = "wangwu"
  static count: number

  constructor(name: string, address: string) {
    this.address = address
    this.name = name
  }
  loan(): void {
    console.log(this.name + " 银行贷款")
  }
}

// 代表构造函数的函数类型
type ConstructorTyp = new (...args: any) => any
interface ConstructorInter {
  new (...args: any): any
}

//function createFactoryConstructor(constructorTyp: new (...args: any) =>any) {
function createFactoryConstructor(constructorTyp: ConstructorInter) {
  console.log(constructorTyp.name + "被创建..")
  new constructorTyp()
}
createFactoryConstructor(CommercialBank)

export {}
