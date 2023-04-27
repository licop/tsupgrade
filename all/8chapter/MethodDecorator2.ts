// 方法装饰器 拦截器的使用

class StringUtil {
  //工具类
  public static trimSpace(str: string): string {
    return str.replace(/\s+/g, '')
  }
}

// 去除参数的空格
function MethodInterceptor(params: string) {
  return function (targetClassPrototype: any, methodname: string, dataProps: PropertyDescriptor) {
    const targetMethod = dataProps!.value
    dataProps!.value = function (...args: any[]) {
      args = args.map((arg) => {
        if (typeof arg === 'string') return StringUtil.trimSpace(arg)
        return arg
      })
      console.log('前置拦截...')
      console.log('args:', args)
      targetMethod.apply(this, args)

      console.log('后置拦截')
    }
  }
}

// 方法装饰器实现拦截器前置、后置功能
class RoleService {
  public roleName: string = '管理员'
  constructor() {}

  get DistribRoles1_() {
    return this.DistribRoles1()
  }

  @MethodInterceptor('DistribRoles方法')
  DistribRoles1() {
    // 分配角色
    console.log('分配角色.....')
  }

  @MethodInterceptor('DistribRoles方法')
  DistribRoles(userName: string, isValid: boolean) {
    // 分配角色
    console.log('分配角色.....')
  }
}

let roleService = new RoleService()
roleService.DistribRoles(' 张  三', true)

