// 泛型工厂类继承装饰器的意义
// 可以在新建实例时在执行一些操作
function ClassFunctionExtends<T extends { new (...args: any[]): any }> (mytargetClass: T) {
  console.log("mytargetClass", mytargetClass);
  class SonClass extends mytargetClass {
    constructor(...args: any[]) {
      super(args);
      console.log("SonClass执行结束");
    }
    commonMethod() {
      //console.log("this:", this)
      console.log("name:", this.name)
    }
  }
  return SonClass
}

// 2. 目标类
@ClassFunctionExtends
class Test {
  name!: string;
  age!: number
  // 1.先执行原来构造函数
  constructor(name: string) {
    this.name = name;

  }
  eat() {
    console.log(this.name, "吃饭");
  }
}
//let SonClass = ClassFunctionExtends<typeof Test>(Test)
// let SonClass = ClassFunctionExtends(Test)
// let SonClassObj= new SonClass("wangwu");

let test = new Test('licop');
test.eat();
(test as any).commonMethod();

export {}