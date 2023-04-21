// 方法拦截器，在方法执行之前或之后完成特定功能

// 使用getOwnPropertyDescriptor和defineProperty
class People {
  name: string;
  age: number;
  addr: string;
  static count: number = 0

  constructor(_name: string, _age: number, _addr: string) {
    this.name = _name
    this.age = _age
    this.addr = _addr
    People.count++
  }
  
  doEat(who: string, where: string) {
    console.log(`who: ${who}, where: ${where}`)
  }
  doStep() {}
}

class StringUtil {
  static trimSpace(str: string) {
    return str.replace(/\s+/g, '')
  }
}

const dataProps1 =  Object.getOwnPropertyDescriptor(People.prototype, 'doEat')
console.log(dataProps1, 24)

const targetMethod = dataProps1?.value

dataProps1!.value = function(...args: any[]) {
  console.log('前置拦截')
  // 去除空字符
  args = args.map(arg => {
    if(typeof arg === 'string') return StringUtil.trimSpace(arg)
    return arg
  })

  targetMethod.apply(this, args)
  console.log('后置拦截')
}
// 通过 Object.defineProperty 把修改了 value 指向 的 dataprop 绑定到 原来的方法上
Object.defineProperty(People.prototype, 'doEat', dataProps1!)
let p1 = new People('licop', 20, 'beijing')
p1.doEat('an na', 'hom e')


// 同时还可以使用proxy方法实现
export {}