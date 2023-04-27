// 属性装饰器可以在不改变属性本身的情况下，为属性添加一些额外的功能或者修改属性的行为。
// 属性装饰器可以用于在属性读取或赋值时执行一些逻辑，也可以用于添加元数据等。

// 类型检查
// 属性装饰器可以用于实现类型检查，例如在属性赋值时检查属性的类型是否正确 


function typeCheck(target: any, key: string) {
  let value = target[key];

  const getter = function() {
    return value;
  };

  const setter = function(newValue: typeof value) {
    if (typeof newValue !== typeof value) {
      throw new Error(`属性 ${key} 类型不正确`);
    }
    value = newValue;
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

class Person {
  @typeCheck
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("张三");
person.name = "李四";
console.log(person.name); // 输出：李四

// person.name = 123; // 抛出错误：属性 name 类型不正确

function computed(target: any, key: string, descriptor: PropertyDescriptor) {
  const getter = descriptor.get as any;

  descriptor.get = function() {
    const value = getter.call(this);
    return value.toUpperCase();
  };

  return descriptor;
}

class Person1 {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  @computed
  get name() {
    return this._name;
  }
}

const person1 = new Person1("张三");
console.log(person.name); // 输出：张三（自动转换为大写字母）

export {}