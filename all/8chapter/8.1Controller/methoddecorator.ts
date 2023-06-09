import 'reflect-metadata'
type MyMethodDecoratorType =
  (targetClassPrototype: any, methodname: string, dataprops: PropertyDescriptor) => void

// 方法装饰器
export function get(reqPath: string): MyMethodDecoratorType {
  return function (targetClassPrototype, methodname, dataprops) {
    console.log("进入到方法饰器", "path:", reqPath);

    let TargetClass = targetClassPrototype.constructor;
    let TargetClassObj = new TargetClass();

    Reflect.defineMetadata("path", reqPath, targetClassPrototype, methodname)

  }
}