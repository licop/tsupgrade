// 带参数类装饰器案例

function FirstClassDecorator(classinfo: string) {
  // 闭包 根据底层源码先执行 FirstClassDecorator(classinfo: string)函数,返回闭包函数，在对类进行包装
  return function (targetClass: any) {
    console.log(classinfo, 4)
    console.log(targetClass.prototype.constructor.name + "信息", 5);
    let targetClassObj = new targetClass()
    targetClassObj.buy() // 下单购买
    console.log(targetClass.name) // CustomerService
  }
}

@FirstClassDecorator("我是参数")
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

export {}
