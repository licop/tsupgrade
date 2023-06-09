import 'reflect-metadata'

// 类参数器
export default function ControllerDecorator(rootPath: string) {
  return function <T>(targetClass: { new(...args: any[]): T }) {
    Object.keys(targetClass.prototype).forEach((methodnamekey) => {

      // 请求路径
      let routerpath = Reflect.getMetadata("path", targetClass.prototype, methodnamekey)
      console.log("routerpath:", routerpath, 10)

      console.log("获取属d性上的元数据", Reflect.getMetadata("prop", targetClass.prototype, "userService"))

    })
  }
}
