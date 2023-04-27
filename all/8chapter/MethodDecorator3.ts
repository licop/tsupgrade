// 方法装饰器可以在不改变方法本身的情况下，为方法添加一些额外的功能或者修改方法的行为。
// 方法装饰器可以用于在方法执行前或执行后执行一些逻辑，也可以用于修改方法的返回值或者参数。
// 方法装饰器

// 日志记录 用于记录方法的调用信息，例如方法的参数、返回值、执行时间等。这样可以帮助我们更好地了解方法的执行情况和性能瓶颈。
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const fn = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`${key} 方法被调用，参数为：${JSON.stringify(args)}`);
    const start = Date.now();
    const result = fn.apply(this, args);
    const end = Date.now();
    console.log(`${key} 方法执行结果为：${JSON.stringify(result)}`);
    console.log(`${key} 方法执行时间为：${end - start}ms`);
    return result;
  };
  
  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
calculator.add(1, 2);

// 输出：
// add 方法被调用，参数为：[1,2]
// add 方法执行结果为：3
// add 方法执行时间为：1ms

// 方法装饰器可以用于验证用户的授权信息，例如用户是否有权限执行某个方法。
function authorize(roles: string[]) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;

    descriptor.value = function(...args: any[]) {
      if (roles.includes("admin")) {
        return fn.apply(this, args);
      } else {
        throw new Error(`用户无权限执行 ${key} 方法`);
      }
    };

    return descriptor;
  };
}

class OrderService {
  @authorize(["admin"])
  createOrder() {
    console.log("创建订单");
  }
}

const orderService = new OrderService();
orderService.createOrder(); // 输出：创建订单

const userService = new OrderService();
userService.createOrder(); // 抛出错误：用户无权限执行 createOrder 方法


// 函数节流
function throttle(delay: number) {
  let timer: any;
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;

    descriptor.value = function(...args: any[]) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };

    return descriptor;
  };
}

class ScrollService {
  @throttle(1000)
  onScroll() {
    console.log("滚动事件被触发");
  }
}

const scrollService = new ScrollService();
window.addEventListener("scroll", () => {
  scrollService.onScroll();
});