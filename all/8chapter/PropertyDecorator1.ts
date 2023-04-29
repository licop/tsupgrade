// 属性装饰器
function loginProperty(attrValue: any) {
  return function (targetclassPrototype: object, attrname: string | symbol) {
    console.log("targetclassPrototype：", targetclassPrototype);
    console.log("attrname：", attrname); // degree
    (targetclassPrototype.constructor as any).custLevelDescri = function () {
      console.log("消费5000元升级为贵宾");
      console.log("消费10000元升级为贵宾,赠送微波炉一个");
    }
  }
}

// 顾客目标类
class CustomerService {
  public custname: string = "王五"
  @loginProperty("顾客登记")
  public degree!: string
  constructor() {
  }

  show() {
    console.log("顾客名:", this.custname)
  }
}

class MyClass {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`你好，我的名字是${this.name}`);
  }
}


console.log(MyClass.prototype);


console.log(CustomerService.prototype, 26)
export {}