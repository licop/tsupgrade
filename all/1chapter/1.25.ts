// set和get方法, 可以对属性进行控制

class People {
  name: string;
  _age: number = 0;
  addr: string;
  static count: number = 0

  constructor(_name: string, _addr: string) {
    this.name = _name
    this.addr = _addr
    People.count++
  }
  
  set age(val: number) {
    if(val > 10 && val < 108) {
      this._age = val
    } else {
      throw new Error('年龄不在合适的范围')
    }
  }

  get age() {
    return this._age
  }

  doEat() {}

  doStep() {}
}

let p1 = new People('licop', 'beijing')

p1.age = 200

