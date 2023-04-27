// 不带参数的类装饰器案例：
function FirstClassDecorator(targetClass: any) {
  let targetClassObj = new targetClass()
  targetClassObj.buy() // 下单购买
  console.log(targetClass.name) // CustomerService
}

@FirstClassDecorator
class CustomerService {
  name: string = "下单"
  constructor() {

  }
  buy() {
    console.log(this.name + "购买");
  }
  placeOrder() {//下单
    console.log(this.name + "下单购买");
  }
}



// 使用类装饰器修改类的原型
function addMethodToPrototype(target: any) {
  target.prototype.newMethod = function() {
    console.log('This is a new method added to the class prototype.');
  }
}
@addMethodToPrototype
class MyClass {

}
const myClass = new MyClass();
(myClass as any).newMethod(); // 输出 "This is a new method added to the class prototype."



// 使用类装饰器来添加静态属性
function addStaticProperty(target: any) {
  target.newStaticProperty = "This is a new static property.";
}
@addStaticProperty
class MyClass1 {
  // 类的定义
}
// 访问新添加的静态属性
console.log((MyClass1 as any).newStaticProperty); // 输出 "This is a new static property."


export {}
