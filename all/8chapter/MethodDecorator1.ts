// 方法装饰器

// 1 不带参数的方法装饰器
function MyMethodDecorator(targetClassPrototype: any,key: string, methodDecri: PropertyDescriptor) {
  console.log("targetClassPrototype:", targetClassPrototype) //
  console.log("key:", key); // DistribRoles
  console.log('数据属性', methodDecri)
  methodDecri.value() // 执行被装饰器修饰的方法 DistribRoles函数
}

class RoleService {
  public roleName: string = "管理员"
  constructor() {
  }

  @MyMethodDecorator // 后执行
  @MyMethodDecoratorWithParams('licop') // 先执行
  DistribRoles() {// 分配角色
    console.log("分配角色.....");
  }
}

// 2 带参数的方法装饰器

function MyMethodDecoratorWithParams(params: string) {
  // 闭包
  return function(targetClassPrototype: any,key: string, methodDecri: PropertyDescriptor) {
    console.log(params, 27)
    console.log("targetClassPrototype:", targetClassPrototype) 
    console.log("key:", key); // DistribRoles
    console.log('数据属性', methodDecri)
    methodDecri.value() // 执行被装饰器修饰的方法 DistribRoles函数
  }
}




export { }