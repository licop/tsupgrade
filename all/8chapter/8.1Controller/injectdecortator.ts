import 'reflect-metadata'

type MyPropDecorator = (targetClassPrototype: any, propertyKey: string | symbol) => void
// 属性装饰器
export function Inject(injectid: string): PropertyDecorator {
  return (targetClassPrototype, propertyKey) => {
    // PropClass=UserService类
    let PropClass = Reflect.getMetadata("design:type", targetClassPrototype, propertyKey)
    let PropClassObj = new PropClass(); // new UserService() 打印 创建UserService类对象
    Reflect.defineMetadata("prop", "属性上的元数据", targetClassPrototype, propertyKey)
  }
}


