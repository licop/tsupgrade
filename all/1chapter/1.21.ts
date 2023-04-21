// 类与静态成员
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
  
  doEat() {}

  doStep() {}
}

let p1 = new People('licop', 20, 'beijing')
let p2 = new People('anna', 21, 'panjin')

console.log(People.count)
p1.doEat()

export {}